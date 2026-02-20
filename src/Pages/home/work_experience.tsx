type WorkExperience = {
  title: string;
  subtitle?: string;
  period: string;
  description: string;
  skills: string[];
  images?: string[];
};

export function WorkExperience() {
  const experiences: WorkExperience[] = [
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
    },
  ];

  return (
    <div className="flex flex-col gap-8 mx-auto">
      <section>
        <h1 className="text-4xl font-bold mb-8">Work Experience</h1>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l-4 border-blue-500 pl-6 pb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h2 className="text-2xl font-bold">{exp.title}</h2>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    {exp.subtitle}
                  </p>
                </div>
                <span className="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap ml-4">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
