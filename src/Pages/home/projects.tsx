import { Experience } from "./experience";
import type { ExperienceProps } from "./experience";

import { myResume } from "@/resume/myresume";

export function Projects() {
  //filter empty titles
  const experiences: ExperienceProps[] =
    myResume.projects
      ?.filter((work) => work.importance?.toInclude != "Always Exclude")
      .filter((work): work is typeof work & { name: string } =>
        Boolean(work.name && work.name.trim() !== ""),
      )
      .map((project) => {
        return {
          title: project.name,
          startDate: project.startDate,
          endDate: project.endDate,
          description: project.description,
          skills: project.tags,
          link: project.url,
          media: project.media,
        };
      })
      .sort((a, b) => {
        // Present fist
        // If both have, sort by start date
        // if both dont have, sort by end date then start date
        if (a.endDate === "Present") {
          a = { ...a, endDate: new Date().toISOString() };
        }
        if (b.endDate === "Present") {
          b = { ...b, endDate: new Date().toISOString() };
        }
        if (a.endDate != b.endDate) {
          return (
            new Date(b.endDate || "").getTime() -
            new Date(a.endDate || "").getTime()
          );
        }
        return (
          new Date(b.startDate || "").getTime() -
          new Date(a.startDate || "").getTime()
        );
      }) || [];

  return (
    <div className="flex flex-col gap-8 mx-auto">
      <section>
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <Experience key={idx} {...exp} />
          ))}
        </div>
      </section>
    </div>
  );
}
