"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const ThemeToggle = ({ cookie }: { cookie: boolean }) => {
    const [dark, setDark] = useState(cookie);

    const toggle = () => {
        setDark(!dark);
        document.cookie = `theme=${dark ? "light" : "dark"}; path=/`;
        document.querySelector("html")?.classList.toggle("dark");
    };

    return (
        <button
            onClick={toggle}
            className="ml-4 relative h-6 w-6 transition-colors text-stone-400 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100"
            aria-label="Toggle theme"
        >
            <MoonIcon className="h-full w-full absolute top-0 left-0 transition-[opacity,transform] opacity-0 rotate-90 dark:opacity-100 dark:rotate-0" />
            <SunIcon className="h-full w-full absolute top-0 left-0 transition-[opacity,transform] opacity-100 rotate-0 dark:opacity-0 dark:rotate-90" />
        </button>
    );
};

export default ThemeToggle;
