import { Experience } from "./experience";
import type { ExperienceProps } from "./experience";
import dummy_projects from "@/Pages/home/experience/dummy_project.png";

export function Projects() {
  const projects: ExperienceProps[] = [
    {
      title: "Senior Full Stack Developer",
      subtitle: "Tech Company",
      period: "2023 - Present",
      description:
        "Led development of scalable web applications using React, Node.js, and TypeScript. Mentored junior developers and improved application performance.",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    },
    {
      title: "Full Stack Developer",
      subtitle: "Digital Agency",
      period: "2021 - 2023",
      description:
        "Developed and maintained multiple client websites and applications. Implemented responsive designs and optimized database queries for better performance.",
      skills: ["React", "JavaScript", "Express", "MongoDB"],
    },
    {
      title: "Junior Developer",
      subtitle: "Startup",
      period: "2020 - 2021",
      description:
        "Built frontend features using React and contributed to backend development. Participated in code reviews and improved development processes.",
      skills: ["JavaScript", "React", "Node.js", "Git"],
      link: "test link.com",
      images: [dummy_projects],
    },
  ];

  return (
    <div className="flex flex-col gap-8 mx-auto">
      <section>
        <h1 className="text-4xl font-bold mb-8">Work Experience</h1>
        <div className="space-y-6">
          {projects.map((exp, idx) => (
            <Experience key={idx} {...exp} />
          ))}
        </div>
      </section>
    </div>
  );
}
