import { prismaClient } from "../../config/prisma";

class ListAllReceivedRadiographyRequestsService {
  async execute(clinicId: string) {

    // 🔐 Confirma que é clínica radiográfica
    const clinic = await prismaClient.user.findUnique({
      where: { id: clinicId }
    });

    if (!clinic || !clinic.isRadiography) {
      throw new Error("Apenas clínicas radiográficas podem acessar esta listagem.");
    }

    // 📥 Lista solicitações recebidas
    const requests = await prismaClient.radiographyRequest.findMany({
      where: {
        assignedToId: clinicId
      },
      orderBy: {
        createdAt: "desc"
      },
      select: {
        id: true,
        status: true,
        modality: true,
        priority: true,
        description: true,
        scheduledAt: true,
        createdAt: true,
        patient: {
          select: {
            id: true,
            name: true
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

export { ListAllReceivedRadiographyRequestsService };
