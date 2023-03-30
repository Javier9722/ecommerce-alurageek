import React, { useEffect, useState } from "react";

const themes = ["light", "dark"];

export default function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    // este SSR es variable de entorno
    if (import.meta.env.SSR) {
      return undefined;
    }
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });
  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <div className="inline-flex items-center rounded-xl overflow-hidden text-2xl">
      <button
        className={`cursor-pointer p-1`}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <i
            className="fad fa-eclipse-alt"
            style={{
              "--fa-primary-color": "#1e293b",
              "--fa-secondary-color": "#fdba74",
              "--fa-secondary-opacity": "1",
            }}
          ></i>
        ) : (
          <i
            className="fad fa-eclipse-alt"
            style={{
              "--fa-primary-color": "#fdba74",
              "--fa-secondary-color": "#1e293b",
              "--fa-secondary-opacity": "1",
            }}
          ></i>
        )}
      </button>
    </div>
  ) : (
    <div />
  );
}
