import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import prisma from "~/server/db";

export const notificationRouter = createTRPCRouter({
  // Notification CRUD operations
  createNotification: publicProcedure
    .input(z.object({ userId: z.number(), content: z.string() }))
    .mutation(async ({ input }) => {
      const notification = await prisma.notification.create({
        data: {
          userId: input.userId,
          content: input.content,
        },
      });
      return notification;
    }),

  updateNotification: publicProcedure
    .input(z.object({ id: z.number(), content: z.string() }))
    .mutation(async ({ input }) => {
      const notification = await prisma.notification.update({
        where: { id: input.id },
        data: {
          content: input.content,
        },
      });
      return notification;
    }),

  deleteNotification: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const notification = await prisma.notification.delete({
        where: { id: input.id },
      });
      return notification;
    }),

  getNotification: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const notification = await prisma.notification.findUnique({
        where: { id: input.id },
      });
      return notification;
    }),

  getAllNotifications: publicProcedure.query(async () => {
    const notifications = await prisma.notification.findMany();
    return notifications;
  }),
});
