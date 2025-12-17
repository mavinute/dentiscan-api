import { hash } from 'bcryptjs';

import { prismaClient } from '../../config/prisma'

interface UserRequest {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
}

class CreateUserService {
  public async execute({email, password, name, address, phone}: UserRequest) {

    if(!email || !password || !name || !address || !phone) {
      throw new Error("Preencha os campos obrigatórios.");
    }

    const userAlreadyExists = await prismaClient.user.findUnique({
      where: { 
        email: email 
    }
    })

    if(userAlreadyExists){
      throw new Error("Usuátio com o email já existente.")
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        email: email,
        name: name,
        passwordHash: passwordHash,
        address: address,
        phone: phone
      }, 
      select: {
        id: true,
        name: true,
        email: true,
        address: true,
        phone: true
      }
    });
    
    return user;
  }
}

export { CreateUserService }