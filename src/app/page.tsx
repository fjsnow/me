import Page from "@/components/Page";
import {
    Heading,
    Paragraph,
    Linebreak,
    SubHeading,
} from "@/components/Typography";
import { MusicalNoteIcon } from "@heroicons/react/16/solid";
import { MapPinIcon } from "@heroicons/react/16/solid";
import {
    Css3Plain,
    DockerPlain,
    GitPlain,
    Html5Plain,
    JavaOriginal,
    KotlinOriginal,
    MongodbOriginal,
    MysqlPlain,
    NextjsLine,
    PythonPlain,
    ReactOriginal,
    RedisOriginal,
    RustPlain,
    TailwindcssPlain,
    TypescriptOriginal,
} from "devicons-react";

const Technology = ({
    display,
    icon,
    colour,
    use,
}: {
    display: string;
    icon: React.ReactNode;
    colour: string;
    use: string;
}) => {
    return (
        <div className="flex flex-col items-start border border-stone-200 dark:border-stone-700 rounded-lg w-full md:flex-row md:items-center">
            <div
                className="flex items-center justify-center px-12 py-6 rounded-t-lg border-b border-stone-200 dark:border-stone-700 w-full md:w-min md:rounded-tr-none md:rounded-l-lg md:border-b-0 md:border-r md:py-8"
                style={{ backgroundColor: colour }}
            >
                {icon}
            </div>
            <div className="flex flex-col justify-center gap-4 md:flex-row md:items-center p-4">
                <div className="flex flex-col justify-center min-w-[8rem]">
                    <h1 className="font-bold text-sm">name:</h1>
                    <h2 className="text-sm">{display}</h2>
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="font-bold text-sm">use:</h1>
                    <h2 className="text-sm">{use}</h2>
                </div>
            </div>
        </div>
    );
};

const ShortTechnology = ({
    logo,
    colour,
}: {
    logo: React.ReactNode;
    colour: string;
}) => {
    return (
        <div
            className={"flex items-center justify-center h-16 w-16 rounded-lg"}
            style={{ backgroundColor: colour }}
        >
            {logo}
        </div>
    );
};

const Index = () => {
    const birth = "2004-12-03";
    const age =
        new Date().getFullYear() -
        new Date(birth).getFullYear() -
        (new Date().getMonth() < new Date(birth).getMonth() &&
        new Date().getDate() < new Date(birth).getDate()
            ? 1
            : 0);

    return (
        <Page current="index">
            <Heading>Hey - I&apos;m Fred</Heading>
            <Paragraph>{age} y/o developer from the UK.</Paragraph>
            <Linebreak />
            <SubHeading>What do I do?</SubHeading>
            <Paragraph>
                I&apos;m a self-taught developer, particularly interested in
                fullstack web development, UI/UX design, and a little bit of
                game development. I also love Mathematics!
            </Paragraph>
            <br />
            <Paragraph>
                I&apos;m currently studying computer science full-time at the{" "}
                <b>University of Birmingham</b>. I&apos;m also working on a few
                side projects in my spare time.
            </Paragraph>
            <Linebreak />
            <SubHeading>What do I use?</SubHeading>
            <Paragraph>
                I love to learn new technologies, languages, and frameworks!
                <br />
                Here&apos;s a few I&apos;m currently using the most:
            </Paragraph>
            <br />
            <div className="flex flex-col items-center justify-center gap-4 md:gap-2">
                <Technology
                    display="TypeScript"
                    icon={<TypescriptOriginal size={32} />}
                    colour="#007ACC"
                    use="A strongly-typed superset of JavaScript."
                />
                <Technology
                    display="React"
                    icon={<ReactOriginal size={32} />}
                    colour="#222222"
                    use="A component-based library for building user interfaces."
                />
                <Technology
                    display="Next.js"
                    icon={<NextjsLine size={32} />}
                    colour="#fff"
                    use="A full-stack framework built on top of React."
                />
                <Technology
                    display="MySQL"
                    icon={<MysqlPlain size={32} color="#fff" />}
                    colour="#41759B"
                    use="A relational database management system."
                />
            </div>
            <br />
            <Paragraph className="text-center">
                And here&apos;s some more tools and technologies I&apos;m
                familiar with:
            </Paragraph>
            <div className="flex flex-row flex-wrap justify-center gap-2 mt-4 max-w-md mx-auto">
                <ShortTechnology
                    logo={<GitPlain size={32} color="#fff" />}
                    colour="#F05032"
                />
                <ShortTechnology
                    logo={<Html5Plain size={32} color="#fff" />}
                    colour="#E04D1D"
                />
                <ShortTechnology
                    logo={<Css3Plain size={32} color="#fff" />}
                    colour="#0177BD"
                />
                <ShortTechnology
                    logo={<TailwindcssPlain size={32} color="#24BDBB" />}
                    colour="#242938"
                />
                <ShortTechnology
                    logo={<JavaOriginal size={32} />}
                    colour="#242938"
                />
                <ShortTechnology
                    logo={<KotlinOriginal size={32} />}
                    colour="#242938"
                />
                {/* <ShortTechnology
                    logo={<RustPlain size={32} color="#fff" />}
                    colour="#000"
                /> soonTM */}
                <ShortTechnology
                    logo={<PythonPlain size={32} color="#fff" />}
                    colour="#41759B"
                />
                <ShortTechnology
                    logo={<MongodbOriginal size={32} />}
                    colour="#023430"
                />
                <ShortTechnology
                    logo={<RedisOriginal size={32} />}
                    colour="#D82C20"
                />
                <ShortTechnology
                    logo={<DockerPlain size={32} color="#fff" />}
                    colour="#2496ED"
                />
            </div>
        </Page>
    );
};

export default Index;
