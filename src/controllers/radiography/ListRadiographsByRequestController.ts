import { Request, Response } from "express";
import { ListRadiographsByRequestService } from "../../services/radiography/ListRadiographsByRequestService";

class ListRadiographsByRequestController {
  async handle(req: Request, res: Response) {
    const userId = req.userId;
    const { requestId } = req.params;

    const service = new ListRadiographsByRequestService();

    const radiographs = await service.execute({
      userId,
      requestId
    });

    return res.json(radiographs);
  }
}

export { ListRadiographsByRequestController };
