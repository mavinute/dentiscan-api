import { Request, Response } from "express";
import { ListReceivedRadiographyRequestsService } from "../../services/radiographyrequest/ListReceivedRadiographyRequestsService";

class ListReceivedRadiographyRequestsController {
  async handle(req: Request, res: Response) {
    const clinicId = req.userId;

    const service = new ListReceivedRadiographyRequestsService();

    const requests = await service.execute(clinicId);

    return res.json(requests);
  }
}

export { ListReceivedRadiographyRequestsController };
