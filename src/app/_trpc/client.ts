import { AppRouter } from "@/trpc";
// import { createTRPCNext } from "@trpc/next";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>({});