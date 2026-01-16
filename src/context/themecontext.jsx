import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    // from localstorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;

    // from system theme
    const prefersDark = window.matchMedia("prefers-color-scheme:dark").matches;
    console.log("system-", prefersDark);

    return prefersDark ? "dark" : "light";
  };
  const [theme, setTheme] = useState(getInitialTheme);

  // sync theme with html tag:

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// custom hook
export const useTheme = () => useContext(ThemeContext);
