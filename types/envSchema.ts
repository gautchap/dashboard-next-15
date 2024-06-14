import z from "zod";

const envSchema = z.object({
    AUTH_SECRET: z.string().trim().min(1),
    PORT: z.number().default(3000),
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

const envServer = envSchema.safeParse({
    AUTH_SECRET: process.env.NEXTAUTH_SECRET,
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
});

if (!envServer.success) {
    console.error(envServer.error.issues);
    throw new Error("There is an error with the server environment variables");
}

export type EnvSchemaType = z.infer<typeof envSchema>;
