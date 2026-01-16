import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/themecontext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  console.log("theme:::=> ", theme);

  return (
    <button
      onClick={toggleTheme}
      className="rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors p-2.5"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 " />
      ) : (
        <Moon className="w-4 h-4 " />
      )}
    </button>
  );
}
