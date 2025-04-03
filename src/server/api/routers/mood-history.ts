import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import prisma from "~/server/db";

export const moodHistoryRouter = createTRPCRouter({
  // MoodHistory CRUD operations
  createMoodHistory: publicProcedure
    .input(z.object({ userId: z.number(), mood: z.number(), date: z.string(), note: z.string().optional() }))
    .mutation(async ({ input }) => {
      const moodHistory = await prisma.moodHistory.create({
        data: {
          userId: input.userId,
          mood: input.mood,
          date: new Date(input.date),
          note: input.note,
        },
      });
      return moodHistory;
    }),

  updateMoodHistory: publicProcedure
    .input(z.object({ id: z.number(), mood: z.number(), date: z.string(), note: z.string().optional() }))
    .mutation(async ({ input }) => {
      const moodHistory = await prisma.moodHistory.update({
        where: { id: input.id },
        data: {
          mood: input.mood,
          date: new Date(input.date),
          note: input.note,
        },
      });
      return moodHistory;
    }),

  deleteMoodHistory: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const moodHistory = await prisma.moodHistory.delete({
        where: { id: input.id },
      });
      return moodHistory;
    }),

  getMoodHistory: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const moodHistory = await prisma.moodHistory.findUnique({
        where: { id: input.id },
      });
      return moodHistory;
    }),

  getAllMoodHistories: publicProcedure.query(async () => {
    const moodHistories = await prisma.moodHistory.findMany();
    return moodHistories;
  }),
});
