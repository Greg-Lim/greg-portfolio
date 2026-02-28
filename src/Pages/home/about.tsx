import { myResume } from "@/resume/myResume";
import { formatDate } from "@/resume/resumeHelpter";

export function About() {
  const skills_dict = {
    Frontend: ["React", "TypeScript", "ReactQuery", "Tailwind CSS"],
    Backend: ["Go", "Node.js", "Express", "PostgreSQL"],
    Other: ["Git", "Docker", "Kubernetes", ""],
  };

  return (
    <div className="flex flex-col gap-8 mx-auto">
      <section>
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          I'm a CS undergrad from NTU who on distributed systems and advanced
          algorithms. From keeping TikTok's backend humming with Go to coding
          Nixie clocks and solving Hangman with Rust , I love building things
          that are as efficient as they are complex. Whether I'm optimizing a
          DBMS or competing in hackathons, I'm always looking for a new problem
          to solve.
        </p>
      </section>
      <section className="hidden">
        <h2 className="text-2xl font-bold mb-4">Technologies I Used</h2>
        {Object.entries(skills_dict).map(([category, skills]) => (
          <div key={category} className="mb-6">
            <h3 className="font-bold mb-2">{category}</h3>
            <div className="flex flex-grid flex-wrap gap-1 sm:w-[80%] md:w-[80%]">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="flex-1 min-w-[calc(40%-1rem)] md:min-w-[calc(31%-1rem)] lg:min-w-[calc(22%-1rem)] text-gray-600 dark:text-gray-300 py-1 mr-6"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* <h3 className="font-semibold mb-2">Frontend</h3>{" "}
        <div className="flex flex-grid flex-wrap gap-1">
          {skills_dict.Frontend.map((skill) => (
            <div
              key={skill}
              className="flex-1 min-w-[calc(47%-1rem)] md:min-w-[calc(31%-1rem)] lg:min-w-[calc(22%-1rem)] text-gray-600 dark:text-gray-300 py-1 mr-6"
            >
              {skill}
            </div>
          ))}
        </div> */}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">What I Love</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          I'm drawn to projects that challenge me to think creatively and solve
          complex problems. I enjoy collaborating with others, learning new
          technologies, and staying updated with the latest trends in web
          development. Outside of coding, I love exploring new ideas and sharing
          knowledge with the developer community.
        </p>
      </section>

      {myResume.education && myResume.education.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6">Education</h2>

          {myResume.education
            .sort((a, b) => {
              const aEnd =
                a.endDate === "Present"
                  ? new Date()
                  : new Date(a.endDate || "");
              const bEnd =
                b.endDate === "Present"
                  ? new Date()
                  : new Date(b.endDate || "");
              return bEnd.getTime() - aEnd.getTime();
            })
            .map((edu) => {
              return (
                <div key={edu.institution} className="mb-6">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {edu.studyType} ({edu.area})
                      </h3>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap ml-4">
                      {edu.startDate && formatDate(edu.startDate, edu.endDate)}
                    </span>
                  </div>
                  <h4 className="text-gray-500 dark:text-gray-400 text-m">
                    {edu.institution}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 max-w-200">
                    CGPA: {edu.score}
                  </p>
                </div>
              );
            })}
        </section>
      )}
    </div>
  );
}
