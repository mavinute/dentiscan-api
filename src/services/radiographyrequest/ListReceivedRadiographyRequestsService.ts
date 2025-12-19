import { RequestStatus } from "@prisma/client";

import { prismaClient } from "../../config/prisma";

class ListReceivedRadiographyRequestsService {
  async execute(clinicId: string) {

    // 🔐 garante que é clínica radiográfica
    const clinic = await prismaClient.user.findUnique({
      where: { id: clinicId }
    });

    if (!clinic || !clinic.isRadiography) {
      throw new Error("Acesso permitido apenas para clínicas radiográficas.");
    }

    const requests = await prismaClient.radiographyRequest.findMany({
      where: {
        assignedToId: clinicId,
        status: RequestStatus.SENT_TO_CLINIC
      },
      orderBy: {
        createdAt: "desc"
      },
      select: {
        id: true,
        status: true,
        createdAt: true,
        modality: true,
        priority: true,
        description: true,
        scheduledAt: true,
        patient: {
          select: {
            id: true,
            name: true,
            birthDate: true
          }
        },
        requestedBy: {
          select: {
            id: true,
            name: true
          }
        }
      }
    });

    return requests;
  }
}

export { ListReceivedRadiographyRequestsService };
