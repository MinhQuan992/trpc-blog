import { createRouter } from "../createRouter";

export const appRouter = createRouter().query("test-trpc", {
  resolve: () => {
    return "Test tRPC successfully!";
  },
});

export type AppRouter = typeof appRouter;
