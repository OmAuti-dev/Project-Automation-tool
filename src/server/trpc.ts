// src/server/trpc.ts
import { initTRPC } from '@trpc/server';
import { getAuth } from '@clerk/nextjs/server';
import { prisma } from '../../prisma';

const t = initTRPC.context().create();

export const createContext = ({ req }: { req: any }) => {
  const { userId } = getAuth(req);
  return { prisma, userId };
};

export type Context = ReturnType<typeof createContext>;

export const router = t.router;
export const publicProcedure = t.procedure;
