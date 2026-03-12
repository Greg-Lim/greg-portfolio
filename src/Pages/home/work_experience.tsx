import { sortByDate } from "@/resume/resumeHelpter";
import { Experience } from "./experience";
import type { ExperienceProps } from "./experience";
import { myResume } from "@/resume/myResume";
import { useFlyInAnimations } from "@/utils/useFlyInAnimations";

export function WorkExperience() {
  const { ref, animations } = useFlyInAnimations();

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
      }) || [];

  const experiencesSorted = sortByDate(experiences);

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-8 mx-auto ${animations.appearNow}`}
    >
      <section>
        <h1 className="text-4xl font-bold mb-8">Work Experience</h1>
        <div className="space-y-6">
          {experiencesSorted.map((exp, idx) => (
            <Experience key={idx} {...exp} />
          ))}
        </div>
      </section>
    </div>
  );
}
