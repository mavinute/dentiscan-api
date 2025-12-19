import { Request, Response } from "express";

import { CreateRadiographyRequestService } from "../../services/radiographyrequest/CreateRadiographyRequestService";

class CreateRadiographyRequestController {
  async handle(req: Request, res: Response) {
    const {
      patientId,
      assignedToId,
      modality,
      priority,
      description,
      scheduledAt
    } = req.body;

    const requestedById = req.userId;

    const service = new CreateRadiographyRequestService();

    const request = await service.execute({
      patientId,
      requestedById,
      assignedToId,
      modality,
      priority,
      description,
      scheduledAt
    });

    return res.json(request);
  }
}

export { CreateRadiographyRequestController };
