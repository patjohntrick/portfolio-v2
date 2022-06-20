import {
  SiMongodb,
  SiNextdotjs,
  SiExpress,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";
const project = [
  {
    id: 1,
    title: "OIC Management",
    img: "/oic/oic.png",
    bgColor: "bg-red-800",
    description:
      "A desktop web app management system in where our client can manage their teams and/or organization digitally.",
    longDescription:
      "A desktop management system in where our client can manage their teams and/or organization digitally. I recreate one of our school projects. Actually, this system was developed using MySQL, PHP, HTML, CSS, and Javascript. I decided to redevelop this system using MongoDB, ExpressJS, ReactJS, and NodeJS or what they called MERN Stack. The reason why I redevelop this system is because I am currently learning MERN stack which I chose to focus on.",
    imgs: [
      {
        img: "/oic/pic1.png",
      },
      {
        img: "/oic/pic2.png",
      },
      {
        img: "/oic/pic3.png",
      },
      {
        img: "/oic/pic4.png",
      },
      {
        img: "/oic/pic5.png",
      },
      {
        img: "/oic/pic6.png",
      },
    ],
    // imgs: ["/oic/pic1.png", "/oic/pic2.png", "/oic/pic3.png"],
    features: [
      {
        feature: "Admin login authentication and authorization.",
      },
      {
        feature:
          "The system has admin dashboard where the admin can see all the data in summary.",
      },
      {
        feature:
          "It can add new member and input their credentials into the system.",
      },
      {
        feature:
          "The system can edit members information if ever mistyped was happened.",
      },
      {
        feature:
          "When new member added, their picture is auto generated using avatars.dicebear.com.",
      },
      {
        feature:
          "The members can give donations and the system can record it. Also the others can donate as well as guest.",
      },
      {
        feature:
          "The system can set activites and can select the expected attendees to it.",
      },
    ],
    technology: [
      <SiMongodb />,
      <SiExpress />,
      <SiNextdotjs />,
      <SiNodedotjs />,
    ],
    packages: [
      "axios",
      "jwt-decode",
      "react-icons",
      "tailwindcss",
      "bcryptjs",
      "cors",
      "dotenv",
      "jsonwebtokens",
      "nodemon",
      "uuid",
    ],
    code: "https://github.com/patjohntrick/oic-management",
    demo: "https://oic-management.vercel.app/",
  },
  {
    id: 2,
    title: "Fresh",
    img: "/fresh/fresh.png",
    bgColor: "bg-green-800",
    description:
      "I saw this design from youtube and I recreate it and I add backend functionality to make it full stack web app.",
    longDescription:
      "I saw this design from youtube and I recreate it and I add backend functionality to make it full stack web app. After I finished the Backend End Development and API's Certification from freeCodeCamp, this web app served as implementation of what I learned. It took me 15 days to finished it because there's a lot of errors and confusions came during development.",
    imgs: [
      {
        img: "/fresh/pic1.png",
      },
      {
        img: "/fresh/pic2.png",
      },
      {
        img: "/fresh/pic3.png",
      },
      {
        img: "/fresh/pic4.png",
      },
      {
        img: "/fresh/pic5.png",
      },
      {
        img: "/fresh/pic6.png",
      },
      {
        img: "/fresh/pic7.png",
      },
    ],
    features: [
      {
        feature: "The system has login authentication and/or authorization.",
      },
      {
        feature:
          "It has register and login panel where the user can input their information/credentials.",
      },
      {
        feature:
          "The user can add food to their list as their options of what to order.",
      },
      {
        feature: "Responsive web design.",
      },
    ],
    technology: [
      <SiMongodb />,
      <SiExpress />,
      <SiNextdotjs />,
      <SiNodedotjs />,
    ],
    packages: [
      "axios",
      "jwt-decode",
      "react-icons",
      "swiper",
      "bcryptjs",
      "cors",
      "dotenv",
      "jsonwebtokens",
      "nodemon",
    ],
    code: "https://github.com/patjohntrick/resto",
    demo: "https://resto-kappa.vercel.app/",
  },
  {
    id: 3,
    title: "Weather Application",
    img: "/weather/weather.png",
    bgColor: "bg-rose-800",
    description:
      "Along in my learning API's back then and until now. I created this web app in order to have my own weather tracker and I literary use it most of the time.",
    longDescription:
      "Along in my learning API's back then and until now. I created this web app in order to have my own weather tracker and I literary use it most of the time.",
    imgs: [
      {
        img: "/weather/pic1.png",
      },
      {
        img: "/weather/pic2.png",
      },
      {
        img: "/weather/pic3.png",
      },
    ],
    features: [
      {
        feature:
          "User can input country and/or city to know the weather or the temperature.",
      },
      {
        feature: "Responsive web design.",
      },
    ],
    technology: [<SiReact />],
    packages: ["gh-pages"],
    code: "https://github.com/patjohntrick/weather-app",
    demo: "https://patjohntrick.github.io/weather-app/",
  },
  {
    id: 4,
    title: ".foodish",
    img: "/foodish/foodish.png",
    bgColor: "bg-zinc-800",
    description:
      "I attracted this website design from frontEndMenter.io. So as part of learning front end development, I replicate and created it form scratch.",
    longDescription:
      "I attracted this website design from frontEndMenter.io. So as part of learning front end development, I replicate this website and created it form scratch. This project is one of my favorite because it challenged me in terms of layout and designing using grid and flex box.",
    imgs: [
      {
        img: "/foodish/foodish.png",
      },
      {
        img: "/foodish/pic1.png",
      },
      {
        img: "/foodish/pic2.png",
      },
      {
        img: "/foodish/pic3.png",
      },
      {
        img: "/foodish/pic4.png",
      },
      {
        img: "/foodish/pic5.png",
      },
    ],
    // imgs: ["/foodish/pic1.png", "/foodish/pic2.png"],
    features: [
      {
        feature: "Responsive web design.",
      },
    ],
    technology: [<SiReact />],
    packages: ["gh-pages"],
    code: "https://github.com/patjohntrick/foodish",
    demo: "https://patjohntrick.github.io/foodish/",
  },
];

module.exports = { project };
