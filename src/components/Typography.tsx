import { twMerge } from "tailwind-merge";

const Heading = ({
    className = "",
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h1 className={twMerge("text-xl font-bold md:text-2xl", className)}>
            {children}
        </h1>
    );
};

const SubHeading = ({
    className = "",
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h1 className={twMerge("text-lg font-semibold md:text-xl", className)}>
            {children}
        </h1>
    );
};

const Paragraph = ({
    className = "",
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={twMerge(
                "text-black dark:text-white text-sm md:text-base",
                className
            )}
        >
            {children}
        </p>
    );
};

const Linebreak = () => {
    return <div className="my-8 w-full h-px bg-stone-300 dark:bg-stone-700" />;
};

export { Heading, SubHeading, Paragraph, Linebreak };
