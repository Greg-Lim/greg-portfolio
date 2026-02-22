import { ModeToggle } from "./mode-toggle";
import { Bars3Icon } from "./icons/heroicons-bars-3";

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  navRef: React.RefObject<HTMLDivElement | null>;
}

export const Navigation = ({ isOpen, setIsOpen, navRef }: NavigationProps) => {
  return (
    <div
      className="shadow-md bg-secondary dark:bg-secondary w-full sticky top-0"
      ref={navRef}
    >
      <div className="flex justify-between items-center max-w-300 mx-auto px-6 py-4">
        {/* Logo/Name */}
        <div className="text-xl font-bold">Greg Lim</div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex gap-4">
          <a
            href="#Intro"
            className="text-lg font-semibold hover:text-gray-300 transition px-4"
          >
            Home
          </a>

          <a
            href="#About"
            className="text-lg font-semibold hover:text-gray-300 transition px-4"
          >
            About
          </a>

          <a
            href="#Work"
            className="text-lg font-semibold hover:text-gray-300 transition px-4"
          >
            Work
          </a>

          <a
            href="#Projects"
            className="text-lg font-semibold hover:text-gray-300 transition px-4"
          >
            Projects
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden">
          <Bars3Icon className="w-8 h-8" />
        </button>

        <div>
          <ModeToggle />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="sm:hidden flex flex-col gap-2 px-6 pb-4">
          <a
            href="#Intro"
            onClick={() => setIsOpen(false)}
            className="text-lg font-semibold hover:text-gray-300 transition"
          >
            Home
          </a>
          <a
            href="#About"
            onClick={() => setIsOpen(false)}
            className="text-lg font-semibold hover:text-gray-300 transition"
          >
            About
          </a>
          <a
            href="#Work"
            onClick={() => setIsOpen(false)}
            className="text-lg font-semibold hover:text-gray-300 transition"
          >
            Work
          </a>
          <a
            href="#Projects"
            onClick={() => setIsOpen(false)}
            className="text-lg font-semibold hover:text-gray-300 transition"
          >
            Projects
          </a>
        </div>
      )}
    </div>
  );
};
