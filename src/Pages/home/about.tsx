import { myResume } from "@/resume/myResume";
import { formatDate, sortByDate } from "@/resume/resumeHelpter";
import { useFlyInAnimations } from "@/utils/useFlyInAnimations";

export function About() {
  const { ref: aboutMeRef, animations: aboutMeAnimations } =
    useFlyInAnimations(0.1);

  const { ref: ref1, animations: animation1 } = useFlyInAnimations(0.5);
  const { ref: ref2, animations: animation2 } = useFlyInAnimations(0.5);
  const { ref: ref3, animations: animation3 } = useFlyInAnimations(0.5);

  const skills_dict = {
    Frontend: ["React", "TypeScript", "ReactQuery", "Tailwind CSS"],
    Backend: ["Go", "Node.js", "Express", "PostgreSQL"],
    Other: ["Git", "Docker", "Kubernetes", ""],
  };

  const certSorted = sortByDate(myResume.certifications || []);

  return (
    <div
      ref={aboutMeRef}
      className={`flex flex-col gap-8 mx-auto w-full ${aboutMeAnimations.appearNow}`}
    >
      <section>
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl">
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
      </section>

      <section ref={ref1} className={`${animation1.appearNow}`}>
        <h2 className={`text-2xl font-bold mb-4 ${animation1.flyInDelay500}`}>
          What I Love
        </h2>
        <p
          className={`text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl ${animation1.flyInDelay700}`}
        >
          I'm drawn to projects that challenge me to think creatively and solve
          complex problems. I enjoy collaborating with others, learning new
          technologies, and staying updated with the latest trends in web
          development. Outside of coding, I love exploring new ideas and sharing
          knowledge with the developer community.
        </p>
      </section>

      {myResume.education && myResume.education.length > 0 && (
        <section ref={ref2} className={`w-full ${animation2.appearNow}`}>
          <h2 className={`text-2xl font-bold mb-6 ${animation2.flyInDelay500}`}>
            Education
          </h2>

          <div className={` ${animation2.flyInDelay700}`}>
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
                        {edu.startDate &&
                          formatDate(edu.startDate, edu.endDate)}
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
          </div>
        </section>
      )}
      <section ref={ref3} className={`w-full ${animation3.appearNow}`}>
        <h2 className={`text-2xl font-bold mb-4 ${animation3.flyInDelay500}`}>
          Certifications
        </h2>
        <div className={`mb-6 ${animation3.flyInDelay700}`}>
          {certSorted && certSorted.length > 0 ? (
            <ul className="list-disc pl-5 space-y-1">
              {certSorted.map((cert, idx) => (
                <li key={idx} className="text-gray-600 dark:text-gray-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">{cert.name}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap ml-4">
                      {cert.date && formatDate(cert.date)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 dark:text-gray-300">
              No certifications listed.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
