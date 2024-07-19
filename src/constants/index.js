import { ZeroBugIcon, acmlogo, goldmanSachs, gsoc, covidtracker, frontcode, tourifyme, weather, hashtech,one, movie_recommender_logo, cnlogo} from "../assets/images";
import {
    car,
    contact,
    css,
    c1,
    cpp,
    bootstrap,
    threejs,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python,
    
    // c,    
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Programming",
    },
    {
        imageUrl: c1,
        name: "C",
        type: "Programming",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Programming",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: threejs,
        name: "Three JS",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },

    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },



    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },


    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },

    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "Teaching Assistant",
        company_name: "Coding Ninja",
        icon: cnlogo,
        iconBg: "#accbe1",
        date: "May 2024 - Present",
        points: [
            "Mentored over 200 students in mastering Data Structures and Algorithms (DSA) and C++ concepts through one-on-one guidance, coding labs, and troubleshooting.",
        ],
        
    },
    {
        title: "Software Development Engineer (SDE) Intern",
        company_name: "ZeroBug (Gurugram, Haryana)",
        icon: ZeroBugIcon,
        iconBg: "#FFC0CB",
        date: "Novemver 2023 - Present",
        points: [
            "Contributed to successful project deliveries, demonstrating a commitment to quality and deadlines.",
            "Developed tailored ERP software systems for client companies, enhancing operational efficiency.",
            "Collaborated effectively in cross-functional teams, resolving technical challenges to ensure project success.",
        ],
        link: 'https://www.linkedin.com/posts/piyush-khurana-907b25227_newbeginnings-softwareengineer-newinternship-activity-7138108518473109504-T2Bm?utm_source=share&utm_medium=member_desktop',
    },
    {
        title: "Full Stack Developer Intern",
        company_name: "Utkrisht",
        icon: acmlogo,
        iconBg: "#accbe1",
        date: "August 2023 - September 2023",
        points: [
            "Developed a Robust Property Management Application using the MERN Stack, Implemented Google OAuth for secure and seamless user authentication. Incorporated advanced filtering options and cutting-edge MongoDB query techniques for efficient and accurate searches. Utilized Redux for state management, ensuring efficient data handling and application performance.",
        ],
        link: 'https://drive.google.com/file/d/1O5b1QjFX1JMNlYBZ9E7zI5tHWvjGXvlL/view',
    },

    {
        title: "Global Rank 186",
        company_name: "GirlScript Summer of Code",
        icon: gsoc,
        iconBg: "orange",
        date: "May 2023 - August 2023",
        points: [
            "Global Rank 186 among 1.6k+ participants in GirlScript Summer of Code 2023",
        ],
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7099018438588739584/',
    },
    {
        title: "1st Position in Hackathon",
        company_name: "Live The Code 2.0 Hackathon",
        icon: one,
        iconBg: "#a2d2ff",
        date: "September 2023",
        points: [
            "Won the Live The Code 2.0 Hackathon among 100+ teams .",
        ],
        link: 'https://drive.google.com/file/d/1H9q1obI9RECJfqwWs6MDQRwe4sE6Vf8X/view?usp=sharing',
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/piyushkhurana2019',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/piyush-khurana-907b25227/',
    }
];

export const projects = [
    // {
    //     iconUrl: movie_recommender_logo,
    //     theme: 'btn-back-red',
    //     name: 'Movie Recommender System',
    //     description: 'Engineered a movie recommender system with machine learning, distilling a dataset of 5000 movies into essential tags. Transforming them into vectors, and leveraging cosine distance for accurate similarity calculations. Implemented with sklearn, the system provides personalized movie suggestions, optimizing user experience.',
    //     link: 'https://tourify-me.onrenderr.com/',
    //     source: 'https://github.com/piyushkhurana2019/Movie_Recommeder_System',
    // },
    {
        iconUrl: tourifyme,
        theme: 'btn-back-green',
        name: 'Tourify Me',
        description: 'Developed a Tour Guide cum Booking app,where Users can browse and book tours using integrated Payment Functionality and get the precise locations of the tours via an integrated map, as well as manage their accounts with photo uploading functionality',
        link: 'https://tourify-me.onrender.com/',
        source: 'https://github.com/piyushkhurana2019/Natours',
    },
    {
        iconUrl: hashtech,
        theme: 'btn-back-red',
        name: 'Hashtech',
        description: `Created a website for a week long Tech Event named HASHTECH, held in GGSIP University under USS ACM Student Chapter, The Club Lead added this website's link in the main USS ACM website`,
        link: 'https://usict.acm.org/hashtech/',
        source: 'https://github.com/piyushkhurana2019/Hashtech-2023',
    },
    {
        iconUrl: weather,
        theme: 'btn-back-blue',
        name: 'Weather App',
        description: 'Weather API based application for real-time weather information with additional functionalities.',
        link: 'https://pk-temperatures.cyclic.app/',
        source: 'https://github.com/piyushkhurana2019/PK-Temperatures',
    },
    {
        iconUrl: frontcode,
        theme: 'btn-back-pink',
        name: 'Front Code',
        description: 'Front-Code is a web app featuring an IDE with syntax highlighting for HTML, CSS, and JS. It includes a Web Editor with real-time output and uses a custom useLocalStorage hook in React to store user data, maintaining it even after page refresh.',
        link: 'https://front-code-xi.vercel.app/',
        source: 'https://github.com/piyushkhurana2019/front-code',
    },
    {
        iconUrl: covidtracker,
        theme: 'btn-back-black',
        name: 'Covid Tracker App ',
        description: 'An intuitive front-end Covid monitoring app with live news integration keeps users updated on health developments. The app features an integrated map for visualization of Covid cases, ensuring users stay informed and empowered.',
        link: 'https://pandemic-tracker-app.vercel.app/',
        source: 'https://github.com/piyushkhurana2019/Covid_Tracker_App',
    },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];