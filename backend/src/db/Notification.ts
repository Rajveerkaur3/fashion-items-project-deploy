import prisma from "../prismaClient";

// Get all notifications for a user
export const getNotificationsForUser = (userId: string) => {
  return prisma.notification.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
};

// Mark a notification as read
export const markNotificationAsRead = (notificationId: number) => {
  return prisma.notification.update({
    where: { id: notificationId },
    data: { read: true },
  });
};

// Create a notification for a user
export const createNotification = (userId: string, message: string) => {
  return prisma.notification.create({
    data: { userId, message },
  });
};
