import { Request, Response } from "express";
import { ListAllReceivedRadiographyRequestsService } from "../../services/radiographyrequest/ListAllReceivedRadiographyRequestsService";

class ListReceivedAllRadiographyRequestsController {
  async handle(req: Request, res: Response) {
    const clinicId = req.userId;

    const service = new ListAllReceivedRadiographyRequestsService();

    const requests = await service.execute(clinicId);

    return res.json(requests);
  }
}

export { ListReceivedAllRadiographyRequestsController };
