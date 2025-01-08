// src/server/trpc.ts
import { initTRPC } from '@trpc/server';
import { getAuth } from '@clerk/nextjs/server';
import { prisma } from '../prisma'; // Ensure this path is correct

const t = initTRPC.context<{
  prisma: typeof prisma; // Define the type of Prisma client
  userId: string | null; // Define the type for userId
}>().create();

export const createContext = ({ req }: { req: any }) => {
  const { userId } = getAuth(req); // Extract user ID from Clerk's authentication
  return { prisma, userId }; // Return context containing `prisma` and `userId`
};

export type Context = ReturnType<typeof createContext>;

export const router = t.router;
export const publicProcedure = t.procedure;
