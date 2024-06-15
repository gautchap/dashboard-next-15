import type { ReactNode } from "react";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { SubmitButton } from "@/app/components/submit-button";

export function SignIn({ provider, children }: { provider: { id: string; name: string }; children: ReactNode }) {
    return (
        <form
            action={async () => {
                "use server";
                try {
                    await signIn(provider.id);
                } catch (error) {
                    if (error instanceof AuthError) return redirect(`/api/auth/error?error=${error.type}`);
                    throw error;
                }
            }}
        >
            <SubmitButton>{children}</SubmitButton>
        </form>
    );
}
