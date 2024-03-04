import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const useTheme = () => {
  return useContext(Context);
};

const ThemeContext = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const theme = isDark ? "dark" : "light";

  useEffect(() => {
    document.documentElement.setAttribute("select-theme", theme);
  }, [theme]);

  return (
    <Context.Provider value={{ isDark, theme, toggleTheme }}>
      {children}
    </Context.Provider>
  );
};

export default ThemeContext;
