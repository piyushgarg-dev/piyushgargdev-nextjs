import React from "react";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import classes from "../../styles/theme-toggle.module.css";

const THEME_STORAGE_KEY = "piyushgarg-theme";

const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
};

const getPreferredTheme = () => {
  if (typeof window === "undefined") {
    return "dark";
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

const ThemeToggle = () => {
  const [theme, setTheme] = React.useState("dark");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const preferredTheme = getPreferredTheme();
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");

    setTheme(preferredTheme);
    applyTheme(preferredTheme);
    setMounted(true);

    const handleChange = (event) => {
      const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

      if (savedTheme) {
        return;
      }

      const nextTheme = event.matches ? "light" : "dark";
      setTheme(nextTheme);
      applyTheme(nextTheme);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  const handleThemeToggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  };

  if (!mounted) {
    return null;
  }

  const isLightTheme = theme === "light";
  const nextThemeLabel = isLightTheme ? "dark" : "light";

  return (
    <div className={classes.toggle__wrapper}>
      <button
        type="button"
        className={classes.toggle__button}
        onClick={handleThemeToggle}
        aria-label={`Switch to ${nextThemeLabel} mode`}
        title={`Switch to ${nextThemeLabel} mode`}
      >
        <span className={classes.toggle__icon} aria-hidden="true">
          {isLightTheme ? <RiMoonClearLine /> : <RiSunLine />}
        </span>
        <span className={classes.toggle__text}>
          {isLightTheme ? "Dark" : "Light"} mode
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
