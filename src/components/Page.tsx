import Footer from "./Footer";
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
            <Footer />
        </div>
    );
};

export default Page;
