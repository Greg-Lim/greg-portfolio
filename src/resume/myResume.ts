import * as resumeType from "@/types/resume";
import MCTSGif from "@/resume/media/MCTS.gif";

import nixie_dark from "@/resume/media/nixie_dark.gif";
import nixie_bright from "@/resume/media/nixie_bright.gif";

export const myResume: resumeType.Resume = {
  basics: {
    name: "Greg LIM",
    email: "limgreg33cc@gmail.com",
    phone: "(+65) 90853263",
    url: "https://limgreg.com",
    summary:
      "Highly motivated Computer Science graduate (GPA: 4.48/5.0) with experience building and maintaining high-scale backend systems and solving complex, novel problems. At TikTok, I designed and developed microservice endpoints using Go, Kitex/Hertz, and multiple databases. I have applied advanced algorithms such as Simulated Annealing and MCTS to real-world optimisation problems, and contributed to enterprise frontend development using React at Autodesk.",
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
            "Led backend development for a new News Anchor vertical, including service migration, endpoint design, and data-fetching logic using Go, MongoDB, Kitex, and Hertz",
        },
        {
          highlight:
            "Resolved around 10 on-call incidents and 20+ alarms per week to support system reliability",
        },
        {
          highlight:
            "Collaborated cross-functionally with Product Managers, Frontend Engineers, QA, and platform teams",
        },
      ],
      tags: ["Go", "MongoDB", "Kitex", "Hertz", "Microservices"],
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
            "Built an advanced search component using React Query for data fetching and state management",
        },
        {
          highlight:
            "Refactored paginated fetching into a reusable generic function for production calls",
        },
        {
          highlight:
            "Used Jest for unit and integration testing, Jenkins for CI/CD, and Git workflows across a larger engineering team",
        },
      ],
      tags: ["React", "ReactQuery", "Jest", "Jenkins", "Frontend"],
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
        "Implemented optimisation algorithms for network coverage localisation and camera placement on 2D maps.",
      highlights: [
        {
          highlight:
            "Implemented Simulated Annealing and MCTS with transposition tables for network max coverage localisation",
        },
        {
          highlight:
            "Built a camera coverage algorithm using all-pairs shortest path analysis and 2D raytracing",
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
      score: "4.48/5.00, Honours (Distinction)",
      courses: [
        "Data Structures and Algorithms",
        "Algorithms Design and Analysis",
        "Software Engineering",
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
      tags: ["Aerospace", "Diploma"],
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
      name: "Global Palette Command Launcher",
      startDate: "2025-12-01",
      endDate: "Present",
      description:
        "Building a Rust command palette that opens from a global hotkey and runs application shortcuts through fuzzy search and TOML-defined extensions.",
      highlights: [
        {
          highlight:
            "Designed a keyboard-first launcher to speed up workflows and make application shortcuts easier to discover",
        },
        {
          highlight:
            "Used the project to deepen practical Rust experience while working with desktop automation concerns",
        },
      ],
      url: "https://github.com/Greg-Lim/global_palette",
      tags: ["Rust", "egui", "Win32 API"],
      media: [
        {
          type: "link",
          url: "https://raw.githubusercontent.com/Greg-Lim/global_palette/master/README/Command_pallete.gif",
        },
      ],
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
        "Built a discrete-event simulation to evaluate QoS trade-offs when adding a reserve channel to a highway cell tower.",
      highlights: [
        {
          highlight:
            "Applied distribution selection, goodness-of-fit testing, sample sizing, convergence analysis, and result analysis",
        },
        {
          highlight:
            "Concluded a 40% decrease in call interruption with a 279% increase in blocked calls (+/- 0.0001, 95% CI)",
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
        "Designed and built a C++ DBMS supporting one-time bulk writes and range queries using a B+ Tree.",
      highlights: [
        {
          highlight:
            "Achieved 4x fewer data block reads from disk through byte-level memory and storage tuning",
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
        "Designed and implemented Java client/server communication over UDP on a simulated unreliable network.",
      highlights: [
        {
          highlight:
            "Achieved at-most-once invocation with reply caching to prevent duplicate execution",
        },
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
        "Developed a React web app that recommends carparks using user location, LTA lot counts, and Google Maps distance data.",
      highlights: [
        {
          highlight:
            "Executed the software development lifecycle from requirements to testing using Agile methodology",
        },
        { highlight: "Built the backend with Node.js and MongoDB" },
      ],
      tags: ["React", "Node.js", "MongoDB", "API Integration"],
    },
    {
      name: "Nixie Clock Manufacturing and Programming",
      startDate: "2020-01-01",
      endDate: "2023-01-01",
      description:
        "Designed, constructed, and programmed a Nixie Clock from scratch with an Arduino microcontroller.",
      highlights: [
        {
          highlight:
            "Interfaced with RTC, display tubes, and user input in real time using an MVC-style structure",
        },
      ],
      url: "https://cad.onshape.com/documents/d066fa25aff03ceb0119ec4c/w/095da257babb9729a095aa51/e/ea19e2183979e32bb777b475",
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
            "Tutored topics including pointers, linked lists, and graph traversal using C",
        },
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
      date: "2026-01-28",
      issuer: "Amazon Web Services",
      importance: {
        priority: 10,
        toInclude: "Optional",
        includeIn: ["Backend", "AWS"],
      },
      tags: ["AWS", "Cloud Computing"],
    },
    {
      name: "The Complete 2020 Web Development Bootcamp on Udemy",
      date: "2021-01-21",
      issuer: "Udemy",
      importance: {
        priority: 6,
        toInclude: "Optional",
        includeIn: ["Frontend"],
      },
      tags: ["JavaScript", "HTML", "CSS"],
    },
    {
      name: "The Rust Programming Language Book",
      date: "2025-01-01",
      importance: {
        priority: 7,
        toInclude: "Optional",
        includeIn: ["Backend", "Systems Programming"],
      },
      tags: ["Rust", "Systems Programming"],
    },
  ],
  awards: [
    {
      title: "Finalist - 2024 TikTok TechJam",
      date: "2024-07-01",
      awarder: "TikTok",
      summary:
        "Built a decentralized cryptocurrency, Tok Coin, using Ethereum blockchain for TikTok Shop and mainly contributed to the frontend",
    },
    {
      title: "Module Prize - Computer Programming",
      date: "2017-01-01",
      awarder: "Ngee Ann Polytechnic",
      summary: "Awarded for performance in Computer Programming",
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
