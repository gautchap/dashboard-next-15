import { redirect } from "next/navigation";
import { sessionCached, providerMap } from "@/auth";
import { SignIn } from "@/app/components/signin-button";

export default async function LoginPage() {
    const session = await sessionCached();
    if (session) return redirect("/account");

    return (
        <div className="flex flex-col gap-2">
            {Object.values(providerMap).map((provider) => (
                <SignIn key={provider.id} provider={provider}>
                    <span>Sign in with {provider.name}</span>
                </SignIn>
            ))}
        </div>
    );
}
