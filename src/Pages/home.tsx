import { useState, useEffect } from "react";
import { Intro } from "./home/intro";
import { About } from "./home/about";
import { WorkExperience } from "./home/work_experience";
import { Projects } from "./home/projects";
import { Contact } from "./home/contact";

export function Home() {
  const [showArrow, setShowArrow] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && showArrow) {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showArrow]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShown && window.scrollY === 0) {
        setShowArrow(true);
        setHasShown(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [hasShown]);

  return (
    <div className="flex flex-col w-auto items-start self-center gap-32 mx-6 lg:mx-16 pt-2 mb-16 max-w-6xl box-border">
      <div id="Intro" className="scroll-mt-32">
        <Intro />
      </div>

      {showArrow && <KeepScrolling />}

      <div id="About" className="scroll-mt-32 w-full">
        <About />
      </div>

      <div id="Work" className="scroll-mt-32  w-full">
        <WorkExperience />
      </div>
      <div id="Projects" className="scroll-mt-32 w-full">
        <Projects />
      </div>
      <div id="Contact" className="scroll-mt-32 w-full">
        <Contact />
      </div>
    </div>
  );
}

function KeepScrolling() {
  return (
    <button
      onClick={() =>
        window.scrollBy({
          top: window.innerHeight - 64,
          behavior: "smooth",
        })
      }
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground/10 dark:bg-foreground/20 border border-foreground/30 hover:bg-foreground/20 dark:hover:bg-foreground/30 transition">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </button>
  );
}
