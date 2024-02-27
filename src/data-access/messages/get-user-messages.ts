import prisma from "../../../prisma/globalPrismaClient";

export default async function getMessages(
  sendinguser: string,
  receivinguser: string
) {
  if (!prisma) {
    throw new Error("Prisma is not defined.");
  }

  const userIdA = sendinguser; // The ID of one user (could be the initial sender or receiver)
  const userIdB = receivinguser; // The ID of the other user (the opposite role from above)

  console.log("userIdA:", userIdA);
  console.log("userIdB:", userIdB);

  const messages = await prisma.message.findMany({
    where: {
      OR: [
        {
          AND: [{ sendingUserId: userIdA }, { receivingUserId: userIdB }],
        },
        {
          AND: [{ sendingUserId: userIdB }, { receivingUserId: userIdA }],
        },
      ],
    },
    select: {
      id: true,
      messageBody: true,
      sentTimestamp: true,
      read: true,
      sendingUser: {
        select: {
          id: true,
          username: true,
        },
      },
      receivingUser: {
        select: {
          id: true,
          username: true,
        },
      },
    },
  });

  if (messages) {
    return messages;
  }
}
