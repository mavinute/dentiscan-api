import { prismaClient } from "../../config/prisma";

interface CreatePatientRequest {
  name: string;
  email: string;
  birthDate: string;
  cpf: string;
  address: string;
  phone: string;
  notes?: string;
  createdById: string;
}

class CreatePatientService {
  async execute({
    name,
    email,
    birthDate,
    cpf,
    address,
    phone,
    notes,
    createdById
  }: CreatePatientRequest) {

    if (!name || !birthDate || !cpf || !address || !phone) {
      throw new Error("Campos obrigatórios não preenchidos.");
    }

    const patientAlreadyExists = await prismaClient.patient.findFirst({
      where: {
        cpf,
        createdById
      }
    });

    if (patientAlreadyExists) {
      throw new Error("Paciente já cadastrado com este CPF.");
    }

    //Futuramente buscar Dados sobre as Radiografias Solicitadas no sistema para o paciente
    // RadiographyRequests

    const patient = await prismaClient.patient.create({
      data: {
        name,
        email,
        birthDate: new Date(birthDate),
        cpf,
        address,
        phone,
        notes,
        createdById
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

    return patient;
  }
}

export { CreatePatientService };
