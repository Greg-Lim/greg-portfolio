import { Outlet } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Navigation } from "./Navigation";

const BaseLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col h-full w-full">
      {/* Navigation */}
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} navRef={navRef} />

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full ">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className=" border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-gray-400">
          <p>© 2026 Greg Lim</p>
        </div>
      </footer>
    </div>
  );
};

export default BaseLayout;
