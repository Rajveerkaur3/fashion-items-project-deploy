import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();

export default {
  async getAll() {
    return await prisma.subscriber.findMany({
      orderBy: { createdAt: "desc" },
    });
  },

  async create(email: string) {
    try {
      const subscriber = await prisma.subscriber.create({
        data: { email },
      });
      return subscriber;
    } catch (err: any) {
      // Prisma throws error if email already exists
      if (err.code === "P2002") {
        // Unique constraint failed
        return null;
      }
      throw err;
    }
  },
};
