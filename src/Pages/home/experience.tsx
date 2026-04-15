import type { Media, MediaFile, MediaLink, MediaPreview } from "@/types/resume";

import useEmblaCarousel from "embla-carousel-react";

import { GithubIcon } from "@/components/icons/github";
import ExternalLinkIcon from "@/components/icons/external-link";
import { formatDate } from "@/resume/resumeHelpter";
import type { CSSProperties } from "react";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./experience.css";
import ChevronLeftIcon from "@/components/icons/chvron_left";
import ChevronRightIcon from "@/components/icons/chvron_right";
import { useFlyInAnimations } from "@/utils/useFlyInAnimations";

const previewFrameRegistry = new Map<string, HTMLIFrameElement>();

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
  const { ref, animations } = useFlyInAnimations();
  return (
    <div
      ref={ref}
      className={`border-l-4 border-blue-500 pl-3 sm:pl-6 pb-6 ${animations.flyInDelay700}`}
    >
      <div className="flex justify-between items-center mb-2">
        <div>
          <span className={`${animations.flyInDelay500}`}>
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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!emblaApi) return;

    // Function to update the state
    const updateButtons = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
      setSelectedIndex(emblaApi.selectedScrollSnap());
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

  const updateExpandedIndex = useCallback(
    (index: number) => {
      setSelectedIndex(index);
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const closeExpandedMedia = useCallback(() => {
    setExpandedIndex(null);
  }, []);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {medias.map((media, idx) => (
            <div key={idx} className="embla__slide max-w-auto max-h-80">
              <MediaOpenButton
                media={media}
                onOpen={() => {
                  setSelectedIndex(idx);
                  setExpandedIndex(idx);
                }}
              />
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

      {expandedIndex !== null && (
        <MediaModal
          medias={medias}
          initialIndex={expandedIndex}
          selectedIndex={selectedIndex}
          onIndexChange={updateExpandedIndex}
          onClose={closeExpandedMedia}
        />
      )}
    </div>
  );
}

function mediaLink(media: MediaLink) {
  return <MediaContent media={media} />;
}

function mediaFile(media: MediaFile) {
  return <MediaContent media={media} />;
}

function mediaPreview(media: MediaPreview) {
  return <MediaContent media={media} />;
}

function MediaOpenButton({
  media,
  onOpen,
}: {
  media: Media;
  onOpen: () => void;
}) {
  if (media.type === "preview") {
    return (
      <div className="relative h-full w-full">
        <PersistentPreviewFrame media={media} />
        <button
          type="button"
          onClick={onOpen}
          className="absolute inset-0 cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          aria-label="Open media preview in a larger view"
        >
          <span className="sr-only">Open media preview in a larger view</span>
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onOpen}
      className="h-full w-full cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      aria-label="Open media in a larger view"
    >
      <MediaContent media={media} />
    </button>
  );
}

function MediaModal({
  medias,
  initialIndex,
  selectedIndex,
  onIndexChange,
  onClose,
}: {
  medias: Media[];
  initialIndex: number;
  selectedIndex: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}) {
  const [modalRef, modalApi] = useEmblaCarousel({
    loop: medias.length > 1,
    startIndex: initialIndex,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [modalSelectedIndex, setModalSelectedIndex] = useState(initialIndex);

  useEffect(() => {
    if (!modalApi) return;

    const updateModalCarousel = () => {
      setCanScrollPrev(modalApi.canScrollPrev());
      setCanScrollNext(modalApi.canScrollNext());
      const nextIndex = modalApi.selectedScrollSnap();
      setModalSelectedIndex(nextIndex);
      onIndexChange(nextIndex);
    };

    modalApi.scrollTo(initialIndex, true);
    updateModalCarousel();
    modalApi.on("select", updateModalCarousel);
    modalApi.on("reInit", updateModalCarousel);

    return () => {
      modalApi.off("select", updateModalCarousel);
      modalApi.off("reInit", updateModalCarousel);
    };
  }, [initialIndex, modalApi, onIndexChange]);

  useEffect(() => {
    if (!modalApi || selectedIndex === modalApi.selectedScrollSnap()) return;
    modalApi.scrollTo(selectedIndex);
  }, [modalApi, selectedIndex]);

  const scrollPrev = useCallback(
    () => modalApi && modalApi.scrollPrev(),
    [modalApi],
  );
  const scrollNext = useCallback(
    () => modalApi && modalApi.scrollNext(),
    [modalApi],
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft") {
        modalApi?.scrollPrev();
      } else if (event.key === "ArrowRight") {
        modalApi?.scrollNext();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalApi, onClose]);

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center overflow-hidden bg-black/85 p-4 [z-index:9999]"
      role="dialog"
      aria-modal="true"
      aria-label="Expanded media view"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="fixed right-4 top-4 rounded-md bg-background/90 px-3 py-2 text-sm font-semibold text-foreground shadow hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 [z-index:10000]"
        aria-label="Close expanded media view"
      >
        Close
      </button>
      <div className="w-full overflow-hidden" ref={modalRef}>
        <div className="flex">
          {medias.map((media, idx) => (
            <div
              key={idx}
              className="flex min-w-0 flex-[0_0_100%] items-center justify-center"
            >
              <ModalMediaContent media={media} />
            </div>
          ))}
        </div>
      </div>

      {medias.length > 1 && canScrollPrev && (
        <button
          type="button"
          className="fixed left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:left-8 sm:h-12 sm:w-12 [z-index:10000]"
          onClick={(event) => {
            event.stopPropagation();
            scrollPrev();
          }}
          aria-label="View previous media"
        >
          <ChevronLeftIcon size={24} />
        </button>
      )}

      {medias.length > 1 && canScrollNext && (
        <button
          type="button"
          className="fixed right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:right-8 sm:h-12 sm:w-12 [z-index:10000]"
          onClick={(event) => {
            event.stopPropagation();
            scrollNext();
          }}
          aria-label="View next media"
        >
          <ChevronRightIcon size={24} />
        </button>
      )}

      {medias.length > 1 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 rounded-md bg-background/80 px-3 py-1 text-sm font-medium text-foreground [z-index:10000]">
          {modalSelectedIndex + 1} / {medias.length}
        </div>
      )}
    </div>,
    document.body,
  );
}

function ModalMediaContent({ media }: { media: Media }) {
  if (media.type === "link") {
    return <ExpandedImage src={media.url} alt="Media Link" />;
  }

  if (media.type === "file") {
    return <ExpandedImage src={media.path} alt="Media File" />;
  }

  return (
    <PersistentPreviewFrame media={media} expanded />
  );
}

function PersistentPreviewFrame({
  media,
  expanded = false,
}: {
  media: MediaPreview;
  expanded?: boolean;
}) {
  const frameHostRef = useCallback(
    (host: HTMLDivElement | null) => {
      if (!host) return;

      const previousParent = previewFrameRegistry.get(media.url)?.parentElement;
      const frame = getPreviewFrame(media);
      frame.className = expanded
        ? "h-[88dvh] max-h-[88dvh] w-[92dvw] max-w-6xl rounded-md bg-background"
        : "h-64 w-full object-contain";
      frame.onclick = (event) => event.stopPropagation();
      host.appendChild(frame);

      return () => {
        if (previousParent && previousParent.isConnected) {
          frame.className = "h-64 w-full object-contain";
          previousParent.appendChild(frame);
        }
      };
    },
    [expanded, media],
  );

  return <div ref={frameHostRef} className="h-full w-full" />;
}

function getPreviewFrame(media: MediaPreview) {
  const existingFrame = previewFrameRegistry.get(media.url);
  if (existingFrame) return existingFrame;

  const frame = document.createElement("iframe");
  frame.src = media.url;
  frame.title = "Media Preview";
  previewFrameRegistry.set(media.url, frame);
  return frame;
}

function ExpandedImage({ src, alt }: { src: string; alt: string }) {
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const expandedImageStyle: CSSProperties | undefined = aspectRatio
    ? {
        width: `min(92dvw, calc(88dvh * ${aspectRatio}))`,
        height: "auto",
        maxHeight: "88dvh",
        maxWidth: "92dvw",
      }
    : undefined;

  return (
    <img
      src={src}
      alt={alt}
      className="max-h-[88dvh] max-w-[92dvw] object-contain"
      style={expandedImageStyle}
      onClick={(event) => event.stopPropagation()}
      onLoad={(event) => {
        const image = event.currentTarget;
        setAspectRatio(image.naturalWidth / image.naturalHeight);
      }}
    />
  );
}

function MediaContent({
  media,
  expanded = false,
}: {
  media: Media;
  expanded?: boolean;
}) {
  if (media.type === "link") {
    return (
      <img
        src={media.url}
        alt="Media Link"
        className={expanded ? "max-h-[88dvh] max-w-[92dvw] object-contain" : "h-full w-full object-contain"}
      />
    );
  }

  if (media.type === "file") {
    return (
      <img
        src={media.path}
        alt="Media File"
        className={expanded ? "max-h-[88dvh] max-w-[92dvw] object-contain" : "h-full w-full object-contain"}
      />
    );
  }

  return (
    <PersistentPreviewFrame media={media} expanded={expanded} />
  );
}
