import { prismaClient } from '../../config/prisma';

interface UpdateUserRequest {
  userId: string;
  name?: string;
  address?: string;
  phone?: string;
}

class UpdateUserService {
  async execute({ userId, name, address, phone }: UpdateUserRequest) {

    const user = await prismaClient.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      throw new Error("Usuário não encontrado.");
    }

    const dataToUpdate: Record<string, any> = {};

    if (name) dataToUpdate.name = name;
    if (address) dataToUpdate.address = address;
    if (phone) dataToUpdate.phone = phone;

    if (Object.keys(dataToUpdate).length === 0) {
      throw new Error("Nenhum dado informado para atualização.");
    }

    const updatedUser = await prismaClient.user.update({
      where: { id: userId },
      data: dataToUpdate,
      select: {
        id: true,
        name: true,
        address: true,
        phone: true
      }
    });

    return updatedUser;
  }
}

export { UpdateUserService };