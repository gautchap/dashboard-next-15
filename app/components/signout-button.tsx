import { signOut } from "@/auth";
import { SubmitButton } from "@/app/components/submit-button";

export function SignOut() {
    return (
        <form
            action={async () => {
                "use server";
                await signOut();
            }}
        >
            <SubmitButton>Sign Out</SubmitButton>
        </form>
    );
}
