import prisma from "../../../prismaClient";

export class ReviewRepository {
  
  getAll() {
    return prisma.review.findMany();
  }

  add(text: string) {
    return prisma.review.create({
      data: { text },
    });
  }

  remove(id: number) {
    return prisma.review.delete({
      where: { id },
    });
  }
}
