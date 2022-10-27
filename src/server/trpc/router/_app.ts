// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { riotRouter } from "./example";
import { authRouter } from "./auth";

export const appRouter = router({
  example: riotRouter,
  auth: authRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
