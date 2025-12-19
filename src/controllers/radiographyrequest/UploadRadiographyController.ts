import { Request, Response } from "express";

import { UploadRadiographyService } from "../../services/radiographyrequest/UploadRadiographyService";

class UploadRadiographyController {
  async handle(req: Request, res: Response) {
    const clinicId = req.userId;
    const { requestId } = req.params;
    const file = req.file;

    if (!file) {
      throw new Error("Arquivo não enviado.");
    }

    const service = new UploadRadiographyService();

    const result = await service.execute({
      clinicId,
      requestId,
      file
    });

    return res.json(result);
  }
}

export { UploadRadiographyController };
