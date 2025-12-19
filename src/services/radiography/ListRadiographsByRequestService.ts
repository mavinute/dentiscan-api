import { prismaClient } from "../../config/prisma";

interface RequestDTO {
  userId: string;
  requestId: string;
}

class ListRadiographsByRequestService {
  async execute({ userId, requestId }: RequestDTO) {

    const request = await prismaClient.radiographyRequest.findUnique({
      where: { id: requestId },
      include: {
        radiographies: {
          select: {
            id: true,
            filePath: true,
            originalName: true,
            contentType: true,
            uploadedAt: true,
            processedAt: true
          }
        }
      }
    });

    if (!request) {
      throw new Error("Solicitação não encontrada.");
    }

    // 🔐 Segurança: Clínica A ou B
    if (
      request.requestedById !== userId &&
      request.assignedToId !== userId
    ) {
      throw new Error("Acesso não autorizado.");
    }

    return request.radiographies;
  }
}

export { ListRadiographsByRequestService };
