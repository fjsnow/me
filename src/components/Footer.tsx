import { Github, Twitter } from "lucide-react";
import Link from "next/link";

const SocialLink = ({
    icon,
    href,
    alt,
}: {
    icon: React.ReactNode;
    href: string;
    alt: string;
}) => {
    return (
        <Link href={href} aria-label={alt}>
            <div className="flex items-center justify-center h-8 w-8 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-700 cursor-pointer">
                {icon}
            </div>
        </Link>
    );
};

const Footer = () => {
    return (
        <div className="flex items-center justify-center text-stone-400 mb-2 py-6 gap-4">
            <span>© Freddy Snow, {new Date().getFullYear()}</span>
            <span className="text-stone-300 dark:text-stone-700">|</span>
            <SocialLink
                icon={<Twitter className="h-4 w-4" />}
                href="https://twitter.com/freddyjsnow"
                alt="Twitter"
            />
            <SocialLink
                icon={<Github className="h-4 w-4" />}
                href="https://github.com/fjsnow"
                alt="Github"
            />
        </div>
    );
};

export default Footer;
