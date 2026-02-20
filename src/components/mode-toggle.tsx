import { Moon, Sun } from "lucide-react"

import { Switch } from "./ui/switch"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const isDark = theme === "dark"

  return (
    <div className="flex items-center justify-center space-x-3">
      <Sun className="h-4 w-4 text-yellow-400" />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle theme"
      />
      <Moon className="h-4 w-4 text-blue-200" />
    </div>
  )
}