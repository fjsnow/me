import Link from "next/link";
import Nav from "./Nav";
import { Github, Twitter } from "lucide-react";

const SocialLink = ({
    icon,
    href,
}: {
    icon: React.ReactNode;
    href: string;
}) => {
    return (
        <Link href={href}>
            <div className="flex items-center justify-center h-8 w-8 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-700 cursor-pointer">
                {icon}
            </div>
        </Link>
    );
};

const Page = ({
    current,
    children,
}: {
    current: string;
    children: React.ReactNode;
}) => {
    return (
        <div className="flex flex-col max-w-4xl w-full h-full p-6">
            <Nav current={current}></Nav>
            <div className="w-full flex-grow my-8">{children}</div>
            <div className="flex items-center justify-center text-stone-400 mb-2 p-6 gap-4">
                <span>© Freddy Snow, {new Date().getFullYear()}</span>
                <span className="text-stone-300 dark:text-stone-700">|</span>
                <SocialLink
                    icon={<Twitter className="h-4 w-4" />}
                    href="https://twitter.com/freddyjsnow"
                />
                <SocialLink
                    icon={<Github className="h-4 w-4" />}
                    href="https://github.com/fjsnow"
                />
            </div>
        </div>
    );
};

export default Page;
