"use client";

import { createContext, FC, useSyncExternalStore } from "react";

export const ThemeContext = createContext("light");

// first we define a subscribe function. Then we 
// pass a listener function that will be called when something 
// is changed.
const subscribe = (listener: () => void) => {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", listener)
  return () => window.removeEventListener("change", listener)
}

// this will be triggered everytime listener is called. Whatever this returns 
// will be the value that we are listening to.
const snapshot = () => window.matchMedia('(prefers-color-scheme: dark)').matches

export const ThemeProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {

  // pass both subscribe and snapshot functions to useSyncExternalStore
  const isDarkMode = useSyncExternalStore(subscribe, snapshot, () => null)
  return (
    <ThemeContext.Provider value={isDarkMode ? "dark" : "light"}>
      {children}
    </ThemeContext.Provider>
  );
};
