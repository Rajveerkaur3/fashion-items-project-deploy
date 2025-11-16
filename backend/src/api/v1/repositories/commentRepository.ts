import prisma from "../../../prismaClient";



export class CommentRepository {
  getAll() {
    return prisma.comment.findMany();
  }

  getById(id: number) {
    return prisma.comment.findUnique({ where: { id } });
  }

  create(data: { category: string; text: string }) {
    return prisma.comment.create({ data });
  }

  update(id: number, data: { category?: string; text?: string }) {
    return prisma.comment.update({ where: { id }, data });
  }

  remove(id: number) {
    return prisma.comment.delete({ where: { id } });
  }
}
