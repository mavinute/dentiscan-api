import { Request, Response } from "express";

import { DetailsPatientService } from "../../services/patient/DetailsPatientService";

class DetailsPatientController {
  async handle(req: Request, res: Response) {
    const patientId = req.params.id;
    const userId = req.userId;

    const detailsPatientService = new DetailsPatientService();

    const patient = await detailsPatientService.execute({
      patientId,
      userId
    });

    return res.json(patient);
  }
}

export { DetailsPatientController };
