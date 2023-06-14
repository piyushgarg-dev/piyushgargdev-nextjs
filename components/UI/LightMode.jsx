// LightModeContext.jsx

import React, { createContext, useState } from "react";

export const LightModeContext = createContext();

export const LightModeProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(false);

  const toggleLightNormal = () => {
    if(lightMode){
        return setLightMode(false);
      }
      else{
        return setLightMode(true);
      }
  };

  return (
    <LightModeContext.Provider value={{ lightMode, toggleLightNormal }}>
      {children}
    </LightModeContext.Provider>
  );
};
