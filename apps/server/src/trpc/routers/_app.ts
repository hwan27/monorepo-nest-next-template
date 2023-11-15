import { mergeRouters } from '../trpc';

const appRouter = mergeRouters();

export type AppRouter = typeof appRouter;
