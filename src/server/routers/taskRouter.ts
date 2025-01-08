// src/server/routers/taskRouter.ts
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { Prisma } from '@prisma/client';

export const taskRouter = router({
  createTask: publicProcedure
    .input(
      z.object({
        title: z.string().min(1, "Title is required"),
        description: z.string().optional(),
        assignedTo: z.string(), // User ID of the person the task is assigned to
      })
    )
    .mutation(async ({ input, ctx }) => { // `ctx` will now be correctly typed
      const { title, description, assignedTo } = input;
      const createdBy = ctx.userId; // Get user ID from the context

      if (!createdBy) {
        throw new Error("Unauthorized");
      }

      const task = await ctx.prisma.task.create({ // Use Prisma from the context
        data: {
          title,
          description: description || '',
          assignedTo,
          createdBy,
          status: 'Pending',
        },
      });

      return task;
    }),
});
