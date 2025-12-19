import { prismaClient } from "../../config/prisma";

interface PatientRequest {
  patientId: string;
  userId: string;
}

class DetailsPatientService {
  async execute({ patientId, userId }: PatientRequest) {

    const patient = await prismaClient.patient.findFirst({
      where: {
        id: patientId,
        createdById: userId
      },
      select: {
        id: true,
        name: true,
        email: true,
        birthDate: true,
        cpf: true,
        address: true,
        phone: true,
        notes: true,
        createdAt: true
      }
    });

    if (!patient) {
      throw new Error("Paciente não encontrado ou acesso não autorizado.");
    }

    return patient;
  }
}

export { DetailsPatientService };
