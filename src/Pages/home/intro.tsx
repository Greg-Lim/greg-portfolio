import pig from "@/assets/pig_2.png";
import { GithubIcon } from "@/components/icons/github";
import { LinkedinIcon } from "@/components/icons/linkedin";

export function Intro() {
  return (
    <>
      <style>{`
        @keyframes wave {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(15deg); }
            50% { transform: rotate(-10deg); }
            75% { transform: rotate(5deg); }
            100% { transform: rotate(0deg); }
        }
        .wave-hover:hover {
            /* Use !important if other classes are interfering, 
            but usually a direct hover declaration is enough */
            animation: wave 0.6s ease-in-out !important;
            transform-origin: bottom right;
        }
      `}</style>
      <div className="flex flex-col md:flex-row gap-6 lg:gap-12 self-center items-center justify-center min-h-[calc(100vh-4rem-4rem)]">
        <img
          src={pig}
          alt="Profile"
          className="w-full md:w-3/5 max-h-80 aspect-auto max-w-80 object-cover rounded-full self-center bg-none"
        />

        <div className="flex flex-col gap-4">
          <span className="leading-8">
            <span className="text-6xl font-bold wave-hover wave-once inline-block xl:text-8xl">
              👋
            </span>
            <span className="text-6xl font-bold inline-block xl:text-8xl">
              Hi there
            </span>
          </span>
          <p className="text-xl dark:text-gray-300">
            Hi! I'm Greg. Welcome to my personal homepage (not PHP). This is my
            personal space to showcase my work, share my thoughts, and connect
            with others in the tech community.
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href="https://github.com/greg-lim"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-3xl hover:opacity-90 transition font-semibold flex items-center gap-2"
            >
              <GithubIcon className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/limgreg/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-3xl hover:opacity-90 transition font-semibold flex items-center gap-2"
            >
              <LinkedinIcon className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
