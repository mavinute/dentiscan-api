import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { prismaClient } from '../../config/prisma';

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {

    const user = await prismaClient.user.findUnique({
      where: { email },
      include: { subscriptions: true }
    });

    if (!user) {
      throw new Error("Email ou senha inválidos.");
    }

    const passwordMatch = await compare(password, user.passwordHash);

    if (!passwordMatch) {
      throw new Error("Email ou senha inválidos.");
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET não definido.");
    }

    const token = sign(
      {},
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '30d'
      }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      isRadiography: user.isRadiography,
      token,
      subscription: user.subscriptions
        ? {
            status: user.subscriptions.status,
            plan: user.subscriptions.plan
          }
        : null
    };
  }
}

export { AuthUserService };