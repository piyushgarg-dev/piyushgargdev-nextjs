import React, { useState } from "react";
import ToggleContext from "./ToggleContext";

const ToggleContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ToggleContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
