import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import prisma from "~/server/db";

export const reflectionRouter = createTRPCRouter({
  // Reflection CRUD operations
  createReflection: publicProcedure
    .input(z.object({ authorId: z.number(), experience: z.string(), reflection: z.string(), tags: z.array(z.string()) }))
    .mutation(async ({ input }) => {
      const reflection = await prisma.reflection.create({
        data: {
          authorId: input.authorId,
          experience: input.experience,
          reflection: input.reflection,
          tags: input.tags,
        },
      });
      return reflection;
    }),

  updateReflection: publicProcedure
    .input(z.object({ id: z.number(), experience: z.string(), reflection: z.string(), tags: z.array(z.string()) }))
    .mutation(async ({ input }) => {
      const reflection = await prisma.reflection.update({
        where: { id: input.id },
        data: {
          experience: input.experience,
          reflection: input.reflection,
          tags: input.tags,
        },
      });
      return reflection;
    }),

  deleteReflection: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const reflection = await prisma.reflection.delete({
        where: { id: input.id },
      });
      return reflection;
    }),

  getReflection: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const reflection = await prisma.reflection.findUnique({
        where: { id: input.id },
      });
      return reflection;
    }),

  getAllReflections: publicProcedure.query(async () => {
    const reflections = await prisma.reflection.findMany();
    return reflections;
  }),
});
