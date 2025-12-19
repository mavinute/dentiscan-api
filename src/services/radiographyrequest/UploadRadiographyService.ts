import { RequestStatus } from "@prisma/client";
import { Multer } from "multer";

import { prismaClient } from "../../config/prisma";

interface UploadDTO {
  clinicId: string;
  requestId: string;
  file: Multer.File;
}

class UploadRadiographyService {
  async execute({ clinicId, requestId, file }: UploadDTO) {

    const clinic = await prismaClient.user.findUnique({
      where: { id: clinicId }
    });

    if (!clinic || !clinic.isRadiography) {
      throw new Error("Acesso permitido apenas para clínicas radiográficas.");
    }

    const request = await prismaClient.radiographyRequest.findUnique({
      where: { id: requestId }
    });

    if (!request) {
      throw new Error("Solicitação não encontrada.");
    }

    if (request.assignedToId !== clinicId) {
      throw new Error("Solicitação não pertence a esta clínica.");
    }

    if (request.status !== RequestStatus.WAITING_UPLOAD) {
      throw new Error("Upload não permitido neste estado.");
    }

    // 1️⃣ IN_PROGRESS
    await prismaClient.radiographyRequest.update({
      where: { id: requestId },
      data: { status: RequestStatus.IN_PROGRESS }
    });

    // 2️⃣ Cria radiografia
    const radiography = await prismaClient.radiography.create({
      data: {
        requestId,
        filePath: file.filename,
        originalName: file.originalname,
        contentType: file.mimetype,
        fileSize: file.size,
        uploadedById: clinicId
      }
    });

    // 3️⃣ COMPLETED
    const completedRequest = await prismaClient.radiographyRequest.update({
      where: { id: requestId },
      data: {
        status: RequestStatus.COMPLETED,
        completedAt: new Date()
      }
    });

    return {
      requestId: completedRequest.id,
      status: completedRequest.status,
      radiographyId: radiography.id
    };
  }
}

export { UploadRadiographyService };
