import prisma from "../../../prismaClient";

export class CommentRepository {
  getAll() {
    return prisma.comment.findMany({
      include: { customer: true, fashionItem: true },
    });
  }

  getById(id: number) {
    return prisma.comment.findUnique({
      where: { id },
      include: { customer: true, fashionItem: true },
    });
  }

  create(data: { text: string; customerId: number; fashionItemId: number }) {
    return prisma.comment.create({
      data: {
        text: data.text,
        customer: { connect: { id: data.customerId } },
        fashionItem: { connect: { id: data.fashionItemId } },
      },
    });
  }

  update(
    id: number,
    data: { text?: string; customerId?: number; fashionItemId?: number }
  ) {
    return prisma.comment.update({
      where: { id },
      data: {
        ...(data.text && { text: data.text }),
        ...(data.customerId && { customer: { connect: { id: data.customerId } } }),
        ...(data.fashionItemId && { fashionItem: { connect: { id: data.fashionItemId } } }),
      },
    });
  }

  remove(id: number) {
    return prisma.comment.delete({
      where: { id },
    });
  }
}
