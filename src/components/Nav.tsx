import { twMerge } from "tailwind-merge";
import { cookies } from "next/headers";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

// const NavLink = ({
//     text,
//     href,
//     selected,
// }: {
//     text: string;
//     href: string;
//     selected: boolean;
// }) => {
//     return (
//         <Link
//             href={href}
//             className={twMerge(
//                 "text-stone-400 dark:text-stone-500 cursor-pointer transition-colors hover:text-stone-900 dark:hover:text-stone-100",
//                 selected ? "text-stone-900 dark:text-stone-100" : ""
//             )}
//         >
//             {text}
//         </Link>
//     );
// };

const Nav = ({ current }: { current: string }) => {
    let dark = cookies().get("theme")?.value != "light";

    return (
        <div className="flex flex-row items-center justify-start h-8">
            <Link href="/">
                <h1 className="text-white bg-blue-700 dark:bg-blue-800 px-4 py-1">
                    fj@personal-site:~$
                </h1>
            </Link>
            <div className="flex flex-row gap-6 ml-auto">
                {/* <NavLink text="/index" href="/" selected={current == "index"} />
                <NavLink
                    text="/projects"
                    href="/projects"
                    selected={current == "projects"}
                /> */}
            </div>
            <ThemeToggle cookie={dark} />
        </div>
    );
};

export default Nav;
