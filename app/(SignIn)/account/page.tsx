import { SignOut } from "@/app/components/signout-button";
import { sessionCached } from "@/auth";
import { redirect } from "next/navigation";

export default async function AccountPage() {
    const session = await sessionCached();
    if (!session) return redirect("/login");

    return (
        <div>
            <pre>{JSON.stringify(session, null, 2)}</pre>
            <SignOut />
        </div>
    );
}
