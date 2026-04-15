import { sortByDate } from "@/resume/resumeHelpter";
import { Experience } from "./experience";

import { myResume } from "@/resume/myResume";

export function Projects() {
  //filter empty titles
  const experiences =
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
          bullets: project.highlights?.map((highlight) => highlight.highlight),
          skills: project.tags,
          link: project.url,
          media: project.media,
        };
      }) || [];
  const experiencesSorted = sortByDate(experiences);

  return (
    <div className="flex flex-col gap-8 mx-auto">
      <section>
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="space-y-6">
          {experiencesSorted.map((exp, idx) => (
            <Experience key={idx} {...exp} />
          ))}
        </div>
      </section>
    </div>
  );
}
