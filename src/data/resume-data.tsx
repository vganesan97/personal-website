import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";
import React from "react";

export const RESUME_DATA = {
  name: "Vishaal Ganesan",
  initials: "VG",
  location: "New York, NY",
  // locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Software Engineer passionate about solving challenging problems and building great products.",
  summary:
  "I'm a full stack engineer with over 4 years of experience building scalable web applications and backend services.  My experience includes stints at small startups, mid size, and large companies.  Currently, I'm passionate about building developer tools, user facing applications, and tools that support AI workflows.  I'm always looking to learn/apply new technologies and tackle interesting problems. Send me an email if you're interested in working together or chatting!",
  avatarUrl: "https://avatars.githubusercontent.com/u/14083307?v=4",
  personalWebsiteUrl: null,
  contact: {
    email: "vishaal.kganesan@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/vganesan97",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vishaalganesan/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "University of Illinois at Urbana-Champaign",
      degree: "Bachelor's Degree in Applied Math (incomplete)",
      start: "2015",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Freelance and Contract Development",
      link: null,
      badges: ["Remote"],
      title: "Software Engineer",
      logo: ParabolLogo,
      start: "2022",
      end: "Present",
      description:
          "Various freelance and contract roles delivering full stack web and smart contract solutions.",
    },
    {
      company: "Vroom Delivery",
      link: "https://vroomdelivery.com",
      badges: ["Remote"],
      title: "Software Engineer",
      logo: ParabolLogo,
      start: "2021",
      end: "2022",
      description: "\n" +
          "Designed intuitive interfaces, implemented real-time logging for faster issue resolution, built a flexible promotions systems, and personalized product recommendations, dramatically enhancing the customer experience through smoother checkouts, quicker problem-solving, increased bundled sales, and doubled purchase rates."
    },
    {
      company: "R3",
      link: "https://r3.com",
      badges: ["Remote"],
      title: "Solutions Engineer Intern → Software Engineer",
      logo: ClevertechLogo,
      start: "2020",
      end: "2021",
      description:
          "Built backend services to enable payment processing and account management with third party payment service providers, designed/developed a web interface to make payments using these services, launched an internal staffing tool to manage cross-team collaboration, and built proof of concepts for customers.",
    },
    {
      company: "Amazon (AWS)",
      link: "https://aws.com/",
      badges: ['San Francisco, CA'],
      title: "Solutions Architect Intern",
      logo: JojoMobileLogo,
      start: "Summer 2019",
      end: null,
      description: "Designed and built a web application that allows users to sandbox their setup for AWS IoT."
    },
    {
      company: "Wolfram",
      link: "https://www.wolfram.com",
      badges: ['Champaign, IL'],
      title: "Research Intern",
      logo: NSNLogo,
      start: "2018",
      end: "2019",
      description: "Designed, built, and launched an linear algebra course for college level students, emphasizing engineering and machine learning applications.",
    },
    {
      company: "University of Illinois Archives",
      link: "https://archives.library.illinois.edu/",
      badges: ["Champaign, IL"],
      title: "Software Engineer Intern",
      logo: NSNLogo,
      start: "Summer/Fall 2017",
      end: null,
      description: "Built a web interface for archivists to search through thousands of hand written documents.",
    },
  ],
  skills: [
    "Python",
    "Java",
    "Kotlin",
    "JavaScript",
    "TypeScript",
    "React/Next.js",
      "Spring",
      "Django",
    "Node.js",
      "PostgreSQL",
    "GraphQL"
  ],
  projects: [
    {
      title: "Vidbox",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Kotlin",
          "Python",
        "SpringBoot",
        "Postgres",
          "OpenAI",
          "Pinecone"
      ],
      description: "Track the content you’re consuming and get a weekly curated content feed from tv, movies, podcasts, and music.",
      logo: ConsultlyLogo,
      link: {
        label: null,
        href: "https://github.com/vganesan97/vidbox",
      },
    },
    {
      title: "Tab Grouper",
      techStack: ["Side Project", "JavaScript", "AWS Lambda", "Hugging Face", "Browser Extension", "OpenAI"],
      description:
        "Browser extension that groups tabs into a customizable number of categories.  Uses LLMs to dynamically create categories.",
      logo: MonitoLogo,
      link: null,
    },
    {
      title: "AuctionX",
      techStack: ["Corda", "Kotlin", "Java", "React", "Kafka"],
      description:
        "Decentralized auction platform built on Corda that enables trustless bidding and escrow services for digital goods.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://github.com/vganesan97/CSDE-cordapp-stockx",
      },
    },
    {
      title: "Shot Filter",
      techStack: ["Python", "Hugging Face", "OpenAI", "React"],
      description:
        "Filter specific shots from tennis YouTube videos to create highlight reels automatically.",
      // logo: Minimal,
      link: null,
    },
    {
      title: "PetGo",
      techStack: ["Side Project", "Next.js", "TypeScript", "Kotlin", "Python","Spring", "AWS", "GCP", "OpenAI", "Redis", "Postgres"],
      description:
        "Match verified and background checked pet sitters to pet owners for long term care.",
      // logo: BarepapersLogo,
      link: null,
    },
    {
      title: "Rest Finder",
      techStack: ["Side Project", "TypeScript", "Next.js", "Kotlin", "Python", "Spring", "GCP", "OpenAI", "Postgres"],
      description: "Find, reserve, and review restrooms around your area using a web app.",
      // logo: YearProgressLogo,
      link: null,
    }
  ],
} as const;
