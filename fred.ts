type Human = {
    name: string;
    age: number;
    pronouns: string;
    occupation: string;
    links: {
        website: string;
        twitter: string;
    };
};

const fred: Human = {
    name: "Freddy Snow",
    age: 19,
    pronouns: "he/him",
    occupation: "Student",
    links: {
        website: "https://freddysnow.com/",
        twitter: "@freddyjsnow",
    },
};
