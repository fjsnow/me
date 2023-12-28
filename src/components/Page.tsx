import Link from "next/link";
import Nav from "./Nav";

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
            <h2 className="text-center text-stone-400 mb-2 p-6">
                © Freddy Snow, {new Date().getFullYear()} |{" "}
                <Link
                    href="https://github.com/fjsnow/freddysnow.com"
                    className="hover:underline"
                >
                    Source
                </Link>
            </h2>
        </div>
    );
};

export default Page;
