import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import prisma from "~/server/db";

export const userRouter = createTRPCRouter({
  // User CRUD operations
  createUser: publicProcedure
    .input(z.object({ email: z.string().email(), name: z.string().optional() }))
    .mutation(async ({ input }) => {
      const user = await prisma.user.create({
        data: {
          email: input.email,
          name: input.name,
        },
      });
      return user;
    }),

  updateUser: publicProcedure
    .input(z.object({ id: z.number(), email: z.string().email(), name: z.string().optional() }))
    .mutation(async ({ input }) => {
      const user = await prisma.user.update({
        where: { id: input.id },
        data: {
          email: input.email,
          name: input.name,
        },
      });
      return user;
    }),

  deleteUser: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const user = await prisma.user.delete({
        where: { id: input.id },
      });
      return user;
    }),

  getUser: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const user = await prisma.user.findUnique({
        where: { id: input.id },
      });
      return user;
    }),

  getAllUsers: publicProcedure.query(async () => {
    const users = await prisma.user.findMany();
    return users;
  }),
});
