import { ModeToggle } from "./mode-toggle";
import { Bars3Icon } from "./icons/heroicons-bars-3";

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  navRef: React.RefObject<HTMLDivElement | null>;
}

export const Navigation = () => {
  return (
    <div className="shadow-md bg-secondary dark:bg-secondary w-full sticky top-0"></div>
  );
};
