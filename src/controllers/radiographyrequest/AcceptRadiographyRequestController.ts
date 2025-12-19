import { Request, Response } from "express";
import { AcceptRadiographyRequestService } from "../../services/radiographyrequest/AcceptRadiographyRequestService";

class AcceptRadiographyRequestController {
  async handle(req: Request, res: Response) {
    const clinicId = req.userId;
    const { requestId } = req.params;

    const service = new AcceptRadiographyRequestService();

    const request = await service.execute({
      clinicId,
      requestId
    });

    return res.json(request);
  }
}

export { AcceptRadiographyRequestController };
