import { Moon, Sun } from "lucide-react";

import { Switch } from "./ui/switch";
import { useTheme } from "@/components/theme";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <>
      <div className="hidden md:flex items-center justify-center space-x-2">
        <Sun className="h-4 w-4 text-yellow-500" />
        <Switch
          checked={isDark}
          onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          aria-label="Toggle theme"
        />
        <Moon className="h-4 w-4 text-blue-200" />
      </div>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="block md:hidden p-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border hover:bg-accent transition-colors"
        aria-label="Toggle theme"
      >
        {/* Sun shows in Light Mode, Moon shows in Dark Mode */}
        <Sun className="h-4 w-4 text-yellow-600 dark:hidden" />
        <Moon className="h-4 w-4 text-blue-400 hidden dark:block" />
      </button>
    </>
  );
}
