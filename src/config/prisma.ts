//import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '../generated/prisma';

const prismaClient = new PrismaClient();

export { prismaClient };