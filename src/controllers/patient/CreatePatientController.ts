import { Request, Response } from "express";

import { CreatePatientService } from "../../services/patient/CreatePatientService";

class CreatePatientController {
  async handle(req: Request, res: Response) {

    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ error: "Não autorizado." });
    }

    const {
      name,
      email,
      birthDate,
      cpf,
      address,
      phone,
      notes
    } = req.body;

    const service = new CreatePatientService();

    const patient = await service.execute({
      name,
      email,
      birthDate,
      cpf,
      address,
      phone,
      notes,
      createdById: userId
    });

    return res.status(201).json(patient);
  }
}

export { CreatePatientController };
