import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const ThemeToggle = ({ className = "" }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // the theme is only known in the browser, so render a placeholder on the server
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span className={`inline-block w-5 h-5 ${className}`} />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={(e) => {
        // keep the click from opening/closing the mobile menu
        e.stopPropagation();
        setTheme(isDark ? "light" : "dark");
      }}
      className={`inline-flex items-center text-xl cursor-pointer text-theme-primary hover:text-[--site-theme-color] transition-colors ${className}`}
    >
      {isDark ? <RiSunLine /> : <RiMoonLine />}
    </button>
  );
};

export default ThemeToggle;
