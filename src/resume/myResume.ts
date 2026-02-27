import * as resumeType from "@/types/resume";
import dummy_projects from "@/Pages/home/experience/dummy_project.png";
import MCTSGif from "@/assets/MCTS.gif";

import nixie_dark from "@/resume/media/nixie_dark.gif";
import nixie_bright from "@/resume/media/nixie_bright.gif";

export const myResume: resumeType.Resume = {
  basics: {
    name: "Greg LIM",
    email: "limgreg33cc@gmail.com",
    phone: "(+65) 90853263",
    url: "https://limgreg.com",
    summary:
      "Highly motivated Computer Science undergraduate (GPA: 4.48/5.0) with experience building and maintaining high-scale backend systems and solving complex, novel problems. At TikTok, I designed and developed microservice endpoints using Go, Kitex/Hertz and various databases. Applied advanced algorithms (Simulated Annealing, MCTS) to real-world problems and contributed to enterprise frontend development using React at Autodesk. Comfortable across Go, C++, Rust, Python, Java and TypeScript.",
    nationality: "Singaporean",
    location: {
      city: "Singapore",
    },
    profiles: [
      {
        network: "GitHub",
        username: "Greg-Lim",
        url: "https://github.com/Greg-Lim",
      },
      {
        network: "LinkedIn",
        username: "limgreg",
        url: "https://www.linkedin.com/in/limgreg/",
      },
    ],
  },
  work: [
    {
      name: "TikTok",
      position: "Backend Software Engineer, Trust and Safety Engineering",
      startDate: "2025-06-15",
      endDate: "2025-12-16",
      summary:
        "Developed and maintained backend services for TikTok's internal Trust & Safety enforcement and investigation platform across multiple micro-services.",
      highlights: [
        {
          highlight:
            "Led backend development for new 'News Anchor' vertical using Go and MongoDB with Kitex/Hertz",
        },
        {
          highlight:
            "Resolved ~10 on-call incidents and 20+ alarms per week to maintain system reliability",
        },
        {
          highlight:
            "Collaborated cross-functionally with Product Managers, Frontend Engineers, QA, and platform teams",
        },
      ],
      tags: ["Go", "MongoDB", "Kitex", "Hertz", "Backend"],
      importance: {
        priority: 9,
        toInclude: "Always Include",
      },
    },
    {
      name: "Autodesk",
      position: "Software Development Engineer, Intern",
      startDate: "2023-08-01",
      endDate: "2023-12-01",
      summary:
        "Developed an advanced search component for the Schema Portal and refactored production code to standardise paginated data fetching.",
      highlights: [
        {
          highlight:
            "Developed advanced search component for Schema Portal using React Query and Jest",
        },
        {
          highlight:
            "Refactored production code to genericise paginated fetching logic",
        },
        {
          highlight:
            "Worked with Git (Merge, Rebase, Cherry-pick) in large team environments",
        },
      ],
      tags: ["React", "React Query", "Jest", "Jenkins", "Frontend"],
      importance: {
        priority: 8,
        toInclude: "Always Include",
      },
    },
    {
      name: "Defence Science and Technology Agency",
      position: "Autonomous Relay of Communication by Robots, Intern",
      startDate: "2023-05-01",
      endDate: "2023-07-01",
      summary:
        "Implemented algorithms for network max coverage localisation and camera coverage optimization.",
      highlights: [
        {
          highlight:
            "Implemented Simulated Annealing and MCTS algorithms for network max coverage localisation",
        },
        {
          highlight:
            "Built camera coverage algorithm using all-pair shortest path and 2D raytracing",
        },
      ],
      tags: ["Python", "Algorithms", "Simulated Annealing", "MCTS"],
      importance: {
        priority: 7,
        toInclude: "Optional",
      },
      media: [
        {
          type: "file",
          path: MCTSGif,
        },
      ],
    },
    {
      name: "ST Engineering Aerospace",
      position: "Engineering Design Centre, Intern",
      startDate: "2018-03-01",
      endDate: "2018-08-01",
      summary:
        "Performed analysis for design validation and force calculations.",
      highlights: [
        {
          highlight:
            "Validated design specifications and performed force calculations",
        },
        {
          highlight:
            "Extracted FEA results for fatigue and damage tolerance analysis",
        },
      ],
      tags: ["FEA", "Design Analysis"],
      importance: {
        priority: 1,
        toInclude: "Always Exclude",
      },
    },
  ],
  education: [
    {
      institution: "Nanyang Technological University, Singapore",
      area: "Computer Science",
      studyType: "Bachelor of Computing",
      startDate: "2021-08-01",
      endDate: "2025-05-01",
      score: "4.48/5.00",
      courses: [
        "Data Structures and Algorithms",
        "Algorithms Design and Analysis",
        "Advance Topics in Algorithms",
        "Distributed Systems",
        "Database Systems Principles",
        "Operating Systems",
        "Cloud Computing",
      ],
      importance: {
        priority: 10,
        toInclude: "Always Include",
      },
    },
    {
      institution: "Ngee Ann Polytechnic",
      area: "Aerospace Technology",
      studyType: "Diploma",
      startDate: "2016-04-01",
      endDate: "2019-02-01",
      score: "3.77/4.0",
      importance: {
        priority: 2,
        toInclude: "Optional",
      },
    },
  ],
  skills: [
    { name: "Frontend", level: "Intermediate" },
    { name: "Backend", level: "Intermediate" },
    { name: "Database", level: "Intermediate" },
    { name: "AWS", level: "Beginner" },
    { name: "React", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Go", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "C++", level: "Intermediate" },
    { name: "Rust", level: "Beginner" },
    { name: "Docker", level: "Beginner" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "PostgreSQL", level: "Beginner" },
    { name: "Git", level: "Intermediate" },
    { name: "gRPC", level: "Beginner" },
    { name: "Jest", level: "Beginner" },
    { name: "Tailwind CSS", level: "Beginner" },
  ],
  projects: [
    {
      name: "Cross Platform Command Palette Tool",
      startDate: "2025-12-01",
      endDate: "2026-02-01",
      description:
        "Architecting a command palette tool to quickly find and run shortcuts across different applications to speed up work ergonomics.",
      highlights: [
        {
          highlight:
            "Building using Rust to learn the language and implement complex practical projects",
        },
      ],
      url: "https://github.com/Greg-Lim/global_palette",
      tags: ["Rust"],
      importance: {
        priority: 6,
        toInclude: "Optional",
      },
    },
    {
      name: "Simulation of a Cellular Telephony Network",
      startDate: "2023-01-01",
      endDate: "2023-03-01",
      description:
        "Built a discrete-event simulation to investigate QoS changes when adding a reserve channel to a highway cell tower.",
      highlights: [
        {
          highlight:
            "Concluded 40% decrease in call interruption with 279% increase in blocked calls (±0.0001, 95% CI)",
        },
      ],
      url: "https://github.com/Greg-Lim/SC4054_Assignment",
      tags: ["Python", "Simulation", "Statistical Analysis"],
      media: [
        {
          type: "link",
          url: "https://raw.githubusercontent.com/Greg-Lim/SC4054_Assignment/refs/heads/main/animation_demo.gif",
        },
      ],
    },
    {
      name: "DBMS using B+ Tree",
      startDate: "2023-08-01",
      endDate: "2023-11-01",
      description:
        "Designed and built a DBMS supporting bulk writes and range queries using B+ Tree in C++.",
      highlights: [
        {
          highlight:
            "Achieved 4x fewer data block reads from disk through byte-level tuning",
        },
      ],
      url: "https://github.com/weiyuan12/Database-System-Principles-Project-1",
      tags: ["C++", "Database", "Data Structures"],
    },
    {
      name: "Distributed Flight Information System",
      startDate: "2023-01-01",
      endDate: "2023-03-01",
      description:
        "Implemented client/server UDP communication with network fault tolerance.",
      highlights: [
        { highlight: "Achieved at-most-once invocation with reply caching" },
      ],
      url: "https://github.com/Greg-Lim/Distributed-Flight-Information-System",
      tags: ["Java", "Distributed Systems", "Network"],
    },
    {
      name: "Hangman Game Solver",
      startDate: "2019-01-01",
      endDate: "2022-01-01",
      description:
        "Developed two hangman solver approaches using heuristics and information theory, then rewrote in Rust.",
      highlights: [
        {
          highlight:
            "Implemented both heuristic and information-gain based approaches",
        },
        { highlight: "Rewrote in Rust for performance and memory safety" },
      ],
      tags: ["Python", "Rust", "Algorithms"],
    },
    {
      name: "Parking Recommendation Web App",
      startDate: "2022-08-01",
      endDate: "2022-12-01",
      description:
        "Developed a React web application to provide carpark recommendations using LTA and Google Maps APIs.",
      highlights: [
        {
          highlight:
            "Executed full software development lifecycle using Agile methodology",
        },
        { highlight: "Integrated with LTA and Google Maps APIs" },
      ],
      tags: ["React", "Node.js", "MongoDB", "API Integration"],
    },
    {
      name: "Nixie Clock Manufacturing and Programming",
      startDate: "2020-01-01",
      endDate: "2023-01-01",
      description:
        "Designed, constructed, and programmed a Nixie Clock from scratch with Arduino microcontroller.",
      highlights: [
        {
          highlight:
            "Programmed Arduino using MVC pattern to interface with RTC, display tubes, and user input",
        },
      ],
      tags: ["Arduino", "Embedded Programming", "Hardware"],
      media: [
        {
          type: "file",
          path: nixie_bright,
        },
        {
          type: "file",
          path: nixie_dark,
        },
      ],
    },
  ],
  volunteer: [
    {
      organization: "Nanyang Technological University",
      position: "Peer Tutor",
      startDate: "2022-02-01",
      endDate: "2023-12-01",
      summary: "Tutored weaker peers in Data Structures and Algorithms.",
      highlights: [
        {
          highlight:
            "Taught complex topics by identifying knowledge gaps and breaking down concepts",
        },
      ],
    },
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      date: "2025-01-01",
      issuer: "Amazon Web Services",
    },
  ],
  awards: [
    {
      title: "Finalist - 2024 TikTok TechJam",
      date: "2024-07-01",
      awarder: "TikTok",
      summary:
        "Built a decentralized cryptocurrency (Tok Coin) using Ethereum blockchain for TikTok Shop",
    },
    {
      title: "First Runner-up - Connect Job CodeChallenge 2023",
      date: "2023-03-01",
      awarder: "Connect Job",
      summary:
        "Built a web app to guide computer science students on career paths",
    },
    {
      title: "Finalist - TechFest 2023 Hackathon",
      date: "2023-01-01",
      awarder: "TechFest",
      summary:
        "Built an IOT system for elderly fall detection using ESP32 and Arduino",
    },
    {
      title: "Inter Hall Games Champion - Floorball",
      date: "2022-01-01",
      awarder: "Nanyang Technological University",
      summary: "Champion for 2021, 2022",
    },
  ],
  languages: [
    {
      language: "English",
      fluency: "Native",
    },
  ],
};
