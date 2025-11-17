// scripts/createComment.ts
import { PrismaClient } from "../generated/prisma";


const prisma = new PrismaClient();

async function main() {
  const comment = await prisma.comment.create({
    data: {
      text: "Great item!",
      customer: { connect: { id: 1 } }, 
      fashionItem: { connect: { id: 1 } }, 
    },
  });
  console.log("Comment created:", comment);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
