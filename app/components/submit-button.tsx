"use client";

import type { ReactNode } from "react";
import { useFormStatus } from "react-dom";

export function SubmitButton({ children }: { children: ReactNode }) {
    const { pending } = useFormStatus();

    return (
        <button className="bg-gray-300 disabled:cursor-auto disabled:bg-gray-600" type="submit" disabled={pending}>
            {children}
        </button>
    );
}
