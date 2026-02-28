import dummy_projects from "@/Pages/home/experience/dummy_project.png";
import { Experience } from "./experience";
import type { ExperienceProps } from "./experience";
import { myResume } from "@/resume/myResume";

export function WorkExperience() {
  //filter empty titles
  const experiences: ExperienceProps[] =
    myResume.work
      ?.filter((work) => work.importance?.toInclude != "Always Exclude")
      .filter((work): work is typeof work & { name: string } =>
        Boolean(work.name && work.name.trim() !== ""),
      )
      .map((work) => {
        return {
          title: work.name,
          subtitle: work.position,
          startDate: work.startDate,
          endDate: work.endDate,
          description: work.summary,
          skills: work.tags,
          link: work.url,
          media: work.media,
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
        <h1 className="text-4xl font-bold mb-8">Work Experience</h1>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <Experience key={idx} {...exp} />
          ))}
        </div>
      </section>
    </div>
  );
}
