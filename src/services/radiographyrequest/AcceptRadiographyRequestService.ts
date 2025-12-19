import { prismaClient } from "../../config/prisma";
import { RequestStatus } from "@prisma/client";

interface AcceptRequestDTO {
  clinicId: string;
  requestId: string;
}

class AcceptRadiographyRequestService {
  async execute({ clinicId, requestId }: AcceptRequestDTO) {

    // 🔐 Verifica se é clínica radiográfica
    const clinic = await prismaClient.user.findUnique({
      where: { id: clinicId }
    });

    if (!clinic || !clinic.isRadiography) {
      throw new Error("Apenas clínicas radiográficas podem aceitar solicitações.");
    }

    // 🔎 Busca a solicitação
    const request = await prismaClient.radiographyRequest.findUnique({
      where: { id: requestId }
    });

    if (!request) {
      throw new Error("Solicitação não encontrada.");
    }

    // 🔐 Garante que a solicitação pertence à clínica
    if (request.assignedToId !== clinicId) {
      throw new Error("Esta solicitação não pertence a esta clínica.");
    }

    // 🔁 Garante estado correto
    if (request.status !== RequestStatus.SENT_TO_CLINIC) {
      throw new Error("Solicitação não pode ser aceita neste estado.");
    }

    // ✅ Atualiza status
    const updatedRequest = await prismaClient.radiographyRequest.update({
      where: { id: requestId },
      data: {
        status: RequestStatus.WAITING_UPLOAD
      },
      select: {
        id: true,
        status: true,
        updatedAt: true,
        patient: {
          select: {
            id: true,
            name: true
          }
        }
      }
    });

    return updatedRequest;
  }
}

export { AcceptRadiographyRequestService };
