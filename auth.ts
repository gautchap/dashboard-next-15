import type { Provider } from "next-auth/providers";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GitHub from "next-auth/providers/github";
import NextAuth from "next-auth";
import { prisma } from "@/lib/prisma";
import { cache } from "react";

const providers: Provider[] = [GitHub];

export const providerMap = providers.map((provider) => {
    if (typeof provider === "function") {
        const providerData = provider();
        return { id: providerData.id, name: providerData.name };
    } else {
        return { id: provider.id, name: provider.name };
    }
});

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers,
    pages: {
        signIn: "/login",
    },
});

export const sessionCached = cache(auth);
