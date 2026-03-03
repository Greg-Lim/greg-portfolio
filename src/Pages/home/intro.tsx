import profile_1 from "@/assets/profile 1.jpg";
import { GithubIcon } from "@/components/icons/github";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { useFlyInAnimations } from "@/utils/useFlyInAnimations";
import { useEffect, useState } from "react";

export function Intro() {
  const { ref, isVisible, animations } = useFlyInAnimations();

  const profile = profile_1;

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-12 md:gap-16 lg:gap-24 ${animations.appearNow}`}
    >
      <div className="flex flex-col md:flex-row gap-4 lg:gap-12 self-center items-center justify-center min-h-[calc(100vh-4rem-4rem)]">
        <img
          src={profile}
          alt="Profile"
          className="w-full md:w-2/3 max-h-70 aspect-square max-w-70 sm:max-h-80 sm:max-w-80 object-cover rounded-full self-center bg-none"
        />

        <div className="flex flex-col">
          <div className={`${animations.flyInDelay500} mb-8`}>
            <WavingHand
              animate={isVisible}
              className="text-4xl md:text-6xl font-bold inline-block xl:text-8xl"
            />
            <span className="text-4xl md:text-6xl font-bold inline-block xl:text-8xl ml-4">
              Hi there
            </span>
          </div>

          <div className={`flex flex-col gap-4 ${animations.flyInDelay700}`}>
            <p className="text-xl dark:text-gray-300 max-w-200">
              Hi! I'm Greg, a Singapore-based Software Engineer. I specialize in
              building scalable backend systems and high-performance frontend
              interfaces.
            </p>

            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/Greg-Lim"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-full hover:opacity-90 transition font-semibold flex items-center gap-2"
              >
                <GithubIcon className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/limgreg/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-full hover:opacity-90 transition font-semibold flex items-center gap-2"
              >
                <LinkedinIcon className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface WavingHandProps {
  animate?: boolean;
  className?: string;
}

export function WavingHand({
  animate = false,
  className = "",
}: WavingHandProps) {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (animate && !hasAnimated) {
        setHasAnimated(true);
      }
    }, 3000); // Delay before the wave animation starts
  }, [animate, hasAnimated]);

  return (
    <span
      className={`inline-block wave-hover ${hasAnimated ? "" : "wave-once"} ${className}`}
    >
      <style>{`
        @keyframes wave {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(15deg); }
            50% { transform: rotate(-10deg); }
            75% { transform: rotate(5deg); }
            100% { transform: rotate(0deg); }
        }
        .wave-once {
            animation: wave 0.6s ease-in-out;
            animation-delay: 2s;
            transform-origin: bottom right;
        }
        .wave-hover:hover {
            animation: wave 0.6s ease-in-out;
            transform-origin: bottom right;
        }
      `}</style>
      👋
    </span>
  );
}
