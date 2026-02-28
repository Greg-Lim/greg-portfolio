import type { Media, MediaFile, MediaLink, MediaPreview } from "@/types/resume";

import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { GithubIcon } from "@/components/icons/github";
import ExternalLinkIcon from "@/components/icons/external-link";
import { formatDate } from "@/resume/resumeHelpter";

export type ExperienceProps = {
  title: string;
  subtitle?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  bullets?: string[];
  skills?: string[];
  link?: string;
  media?: Media[];
};

export function Experience(exp: ExperienceProps) {
  return (
    <div className="border-l-4 border-blue-500 pl-3 sm:pl-6 pb-6">
      <div className="flex justify-between items-start mb-2">
        <div>
          <span>
            <h2 className="text-2xl font-bold flex items-center gap-2 flex-wrap">
              {exp.title}
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:scale-110 transition-transform ml-1 w-6 h-6"
                  aria-label={`View ${exp.title}`}
                >
                  {exp.link.includes("github.com") ? (
                    <GithubIcon />
                  ) : (
                    <ExternalLinkIcon />
                  )}
                </a>
              )}
            </h2>
          </span>
        </div>
        <span className="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap ml-4">
          {exp.startDate && formatDate(exp.startDate, exp.endDate)}
        </span>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-8">
        {/* Left Content */}
        <div className="flex-1 flex flex-col">
          <p className="text-blue-600 dark:text-blue-400 font-semibold">
            {exp.subtitle}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-3 max-w-200">
            {exp.description}
          </p>
          {exp.bullets && exp.bullets.length > 0 && (
            <ul className="list-disc pl-5 space-y-1">
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} className="text-gray-600 dark:text-gray-300">
                  {bullet}
                </li>
              ))}
            </ul>
          )}

          {/* mt-auto pushes this div to the bottom of the flex-1 container */}
          <div className="mt-auto pt-4 flex flex-wrap gap-2">
            {exp.skills?.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* Right Image */}
        {exp.media && exp.media.length > 0 && (
          <div className="w-auto md:w-1/2 shrink-0 max-h-80 max-w-auto">
            <ExperienceImage media={exp.media[0]} />
          </div>
        )}
      </div>
    </div>
  );
}

export function ExperienceImage({ media }: { media: Media }) {
  if (media.type === "link") {
    return mediaLink(media);
  } else if (media.type === "file") {
    return mediaFile(media);
  } else if (media.type === "preview") {
    return mediaPreview(media);
  } else {
    return null;
  }
}

export function ExperienceCarousel({ medias }: { medias: Media[] }) {
  return (
    <Splide className="w-full ">
      {medias.map((media, idx) => (
        <SplideSlide key={idx} className="w-full">
          {media.type === "link" && mediaLink(media)}
          {media.type === "file" && mediaFile(media)}
          {media.type === "preview" && mediaPreview(media)}
        </SplideSlide>
      ))}
    </Splide>
  );
}

export function mediaLink(media: MediaLink) {
  return (
    <img
      src={media.url}
      alt="Media Link"
      className="w-full h-full object-contain"
    />
  );
}

export function mediaFile(media: MediaFile) {
  return (
    <img
      src={media.path}
      alt="Media File"
      className="w-full h-full object-contain"
    />
  );
}

export function mediaPreview(media: MediaPreview) {
  return (
    <iframe
      src={media.url}
      title="Media Preview"
      className="w-full h-64 object-contain"
    />
  );
}
