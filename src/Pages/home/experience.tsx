import type { Media, MediaFile, MediaLink, MediaPreview } from "@/types/resume";

import useEmblaCarousel from "embla-carousel-react";

import { GithubIcon } from "@/components/icons/github";
import ExternalLinkIcon from "@/components/icons/external-link";
import { formatDate } from "@/resume/resumeHelpter";
import { useCallback, useEffect, useState } from "react";
import "./experience.css";
import ChevronLeftIcon from "@/components/icons/chvron_left";
import ChevronRightIcon from "@/components/icons/chvron_right";

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
      <div className="flex justify-between items-center mb-2">
        <div>
          <span>
            <h2 className="text-lg md:text-2xl font-bold flex items-center gap-2 flex-wrap">
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
        <span className="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap ml-4 items-center">
          {exp.startDate && formatDate(exp.startDate, exp.endDate)}
        </span>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-8">
        {/* Left Content */}
        <div className="flex-1 flex flex-col">
          <p className="text-blue-600 dark:text-blue-400 font-semibold">
            {exp.subtitle}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-3 max-w-4xl">
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
            {/* <ExperienceImage media={exp.media[0]} /> */}
            <EmblaCarousel medias={exp.media} />
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

export function EmblaCarousel({ medias }: { medias: Media[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  // State to track if we can scroll
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    // Function to update the state
    const updateButtons = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    updateButtons(); // Run immediately when API is ready

    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);

    // Clean up listeners on unmount
    return () => {
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {medias.map((media, idx) => (
            <div key={idx} className="embla__slide max-w-auto max-h-80">
              {media.type === "link" && mediaLink(media)}
              {media.type === "file" && mediaFile(media)}
              {media.type === "preview" && mediaPreview(media)}
            </div>
          ))}
        </div>
      </div>

      {/* Conditionally render the buttons */}
      {canScrollPrev && (
        <button
          className="embla__prev bg-primary max-w-6 max-h-6 sm:max-w-10 sm:max-h-10 rounded-full flex items-center justify-center"
          onClick={scrollPrev}
        >
          <ChevronLeftIcon size={20} />
        </button>
      )}

      {canScrollNext && (
        <button
          className="embla__next bg-primary max-w-6 max-h-6 sm:max-w-10 sm:max-h-10 rounded-full flex items-center justify-center"
          onClick={scrollNext}
        >
          <ChevronRightIcon size={20} />
        </button>
      )}
    </div>
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
