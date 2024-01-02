import { cookies } from "next/headers";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./global.css";
import { twMerge } from "tailwind-merge";

const ibm = IBM_Plex_Mono({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Freddy Snow",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    let dark = cookies().get("theme")?.value != "light";

    return (
        <html lang="en" className={dark ? "dark" : ""}>
            <body
                className={twMerge(
                    "screen flex justify-center bg-white text-black dark:bg-black dark:text-white",
                    ibm.className
                )}
            >
                {children}
            </body>
        </html>
    );
}
