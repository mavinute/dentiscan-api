import { RequestStatus } from "@prisma/client";

import { prismaClient } from "../../config/prisma";

interface RequestDTO {
  patientId: string;
  requestedById: string;
  assignedToId: string;
  modality?: string;
  priority?: number;
  description?: string;
  scheduledAt?: Date;
}

class CreateRadiographyRequestService {
  async execute({
    patientId,
    requestedById,
    assignedToId,
    modality,
    priority,
    description,
    scheduledAt
  }: RequestDTO) {

    // 1️⃣ Valida paciente (pertence à clínica A)
    const patient = await prismaClient.patient.findFirst({
      where: {
        id: patientId,
        createdById: requestedById
      }
    });

    if (!patient) {
      throw new Error("Paciente não encontrado ou acesso não autorizado.");
    }

    // 2️⃣ Valida clínica B
    const clinicB = await prismaClient.user.findUnique({
      where: { id: assignedToId }
    });

    if (!clinicB || !clinicB.isRadiography) {
      throw new Error("Clínica selecionada não realiza radiografias.");
    }

    if (clinicB.id === requestedById) {
      throw new Error("Não é permitido enviar solicitação para a própria clínica.");
    }

    // 3️⃣ Cria solicitação
    const request = await prismaClient.radiographyRequest.create({
      data: {
        patientId,
        requestedById,
        assignedToId,
        modality,
        priority,
        description,
        scheduledAt,
        status: RequestStatus.SENT_TO_CLINIC
      },
      select: {
        id: true,
        status: true,
        createdAt: true,
        patient: {
          select: {
            name: true
          }
        },
        assignedTo: {
          select: {
            name: true
          }
        }
      }
    });

    return request;
  }
}

export { CreateRadiographyRequestService };
