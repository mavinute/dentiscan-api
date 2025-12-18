import { prismaClient } from "../../config/prisma";

class UserDetailsService {
  async execute(userId: string) {

    const user = await prismaClient.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isRadiography: true,
        subscriptions: {
          select: {
            status: true,
            plan: true,
            startedAt: true,
            endedAt: true
          }
        }
      }
    });

    if (!user) {
      throw new Error("Usuário não encontrado.");
    }

    return user;
  }
}

export { UserDetailsService };