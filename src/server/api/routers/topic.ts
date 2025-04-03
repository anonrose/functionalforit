import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import prisma from "~/server/db";

export const topicRouter = createTRPCRouter({
  // Topic CRUD operations
  createTopic: publicProcedure
    .input(z.object({ title: z.string(), description: z.string(), gradient: z.string() }))
    .mutation(async ({ input }) => {
      const topic = await prisma.topic.create({
        data: {
          title: input.title,
          description: input.description,
          gradient: input.gradient,
        },
      });
      return topic;
    }),

  updateTopic: publicProcedure
    .input(z.object({ id: z.number(), title: z.string(), description: z.string(), gradient: z.string() }))
    .mutation(async ({ input }) => {
      const topic = await prisma.topic.update({
        where: { id: input.id },
        data: {
          title: input.title,
          description: input.description,
          gradient: input.gradient,
        },
      });
      return topic;
    }),

  deleteTopic: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const topic = await prisma.topic.delete({
        where: { id: input.id },
      });
      return topic;
    }),

  getTopic: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const topic = await prisma.topic.findUnique({
        where: { id: input.id },
      });
      return topic;
    }),

  getAllTopics: publicProcedure.query(async () => {
    const topics = await prisma.topic.findMany();
    return topics;
  }),
});
