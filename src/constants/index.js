import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  rangleresearch,
  lhap,
  portfolio,
  threejs,
  fullstack,
  ignitecs,
  formularacing,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "App Developer",
    icon: backend,
  },
  {
    title: "CS Curriculum Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Fullstack@Brown",
    icon: fullstack,
    iconBg: "#FFFFFF",
    date: "September 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Tailwind.CSS, and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create functional websites.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "CS Curriculum Developer",
    company_name: "IgniteCS",
    icon: ignitecs,
    iconBg: "#FFFFFF",
    date: "September 2023 - Present",
    points: [
      "Worked with local schools ranging from elementary to high school to develop computer science curriculums to provide CS education and generate interest in pursuing computer science in students.",
      "Communicated with computer science teachers in the Providence area to gauge interest in computer science topics.",
      "Developed and taught Python, CAD, and Java curriculums, creating slide decks and interactive programs focusing on the basics of programming and good design, engineering, and programming principles.",
      "Provided snippets of college life to promote interest in pursuing higher education, as many of the students would be first-generation college students.",
    ],
  },
  {
    title: "Driving Day Data App Developer",
    company_name: "Brown Formula Racing",
    icon: formularacing,
    iconBg: "#000000",
    date: "September 2024 - Present",
    points: [
      "Utilized HTML, CSS, Javascript, and React to develop an app to track data fenerated on driving day.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create  a robust app.",
      "Conducted data analysis to create an overview of the car.",
    ],
  },
];

const projects = [
  {
    name: "Rangel Research Group",
    description:
      "Front-end website that allows Dr. David Enrique Rangel and his research group to reach families and give them an overview of his research project studying how the relationship between families and schools impact educational success. The site contains preliminary " + 
      "information about the study, allows for families to toggle between English and Spanish webpages, and links to the qualtrics survey for the study.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: rangleresearch,
    source_code_link: "https://github.com/bwu29/rangelresearch",
  },
  {
    name: "Project LHAP",
    description:
      "Full stack website that allows students to connect with health professionals to understand the impact their environment has on their health. This site aims to equipt students with the knowledge on lung disease and risk factors through hosting training videos and informative programs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "red-text-gradient",
      },
    ],
    image: lhap,
    source_code_link: "https://github.com/jjchilling/LHAP",
  },
  {
    name: "This Website!",
    description:
      "Tinkering with Three.js, I built this portfolio website using React, Tailwind, Three.js, and Next.js",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/ezheng34/3dsite",
  },
];

export { services, technologies, experiences, projects };
