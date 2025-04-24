// certificate_image: "/certificates/cloudcomputing.png",
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  // gfg,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Certificates",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DevOps Engineer",
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
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Structures and Algorithms",
    company_name: "Geeks for Geeks",
    iconBg: "#383E56",
    date: "July 2024",
    points: [
      "Strong Foundation in DSA",
      "Improved Problem-Solving Skills.",
      "Increased Coding Speed & Accuracy.",
      "Increased Coding Speed & Accuracy.",
    ],
    certificate_link: "https://www.geeksforgeeks.org/certificate/2692c76e9dacd4ecfa3bd1b5170062eb?utm_source=socials&utm_medium=cc_link", 
    certificate_image: "/certificates/gfgdsa.png",
  },
  {
    title: "Server side JavaScript with Node.js",
    company_name: "Coursera",
    iconBg: "#383E56",
    date: "March 2023",
    points: [
      "Gained hands-on experience in building server-side applications using Node.js.",
      "Learned to create and manage RESTful APIs and handle HTTP requests/responses.",
      "Developed skills in using Express.js for setting up routes and middleware.",
    ],
    certificate_link: "https://www.coursera.org/account/accomplishments/verify/WRZPZAAAHNBS",
    certificate_image: "/certificates/server.png",
  },
  {
    title: "IBM DevOps and Software Engineering",
    company_name: "Coursera",
    iconBg: "#383E56",
    date: "September 2024",
    points: [
      "Practiced DevOps mindset, Agile, and Scrum.",
      "Developed microservices-based apps.",
      "Deployed using Docker, Kubernetes, OpenShift.",
      "Automated CI/CD pipelines.",
    ],
    certificate_link: "https://www.coursera.org/account/accomplishments/professional-cert/W8C2KGIAWKWZ",
    certificate_image: "/certificates/ibmdev.png",
  },
  {
    title: "Cloud Computing",
    company_name: "NPTEL",
    iconBg: "#383E56",
    date: "October 2024",
    points: [
      "Learned cloud service and deployment models (IaaS, PaaS, SaaS).",
      "Understood virtualization and cloud infrastructure.",
      "Understood architecture of cloud platforms and data centers.",
    ],
    certificate_link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs118/Course/NPTEL24CS118S157020079004430804.pdf",
    certificate_image: "/certificates/cloudcomputing.png",
  },
];

const testimonials = [
  {
    testimonial:
      "Earned a Silver badge (3 stars) in C++ on HackerRank.",
    name: "HackerRank",
    // designation: "CFO",
    // company: "Acme Co",
    link: "https://www.hackerrank.com/profile/gautamchelsea639",
  },
  {
    testimonial:
      "Earned Java (Basic) Certificate on HackerRank.",
    name: "HackerRank",
    // designation: "COO",
    // company: "DEF Corp",
    link: "https://www.hackerrank.com/certificates/edc46f3c54d6",
  },
  {
    testimonial:
      "Earned Problem Solving(Basic) Certificate on HackerRank ",
    name: "HackerRank",
    // designation: "CTO",
    // company: "456 Enterprises",
    link: "https://www.hackerrank.com/certificates/4ae79359e97d",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];


export { services, technologies, experiences, testimonials, projects };