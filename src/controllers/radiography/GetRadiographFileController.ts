import { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { prismaClient } from "../../config/prisma";

class GetRadiographFileController {
  async handle(req: Request, res: Response) {
    const userId = req.userId;
    const { id } = req.params;

    const radiograph = await prismaClient.radiography.findUnique({
      where: { id },
      include: {
        request: true
      }
    });

    if (!radiograph) {
      throw new Error("Radiografia não encontrada.");
    }

    // 🔐 Segurança
    if (
      radiograph.request.requestedById !== userId &&
      radiograph.request.assignedToId !== userId
    ) {
      throw new Error("Acesso não autorizado.");
    }

    const filePath = path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "uploads",
      radiograph.filePath
    );

    if (!fs.existsSync(filePath)) {
      throw new Error("Arquivo não encontrado.");
    }

    res.setHeader(
      "Content-Type",
      radiograph.contentType || "application/octet-stream"
    );

    return res.sendFile(filePath);
  }
}

export { GetRadiographFileController };
