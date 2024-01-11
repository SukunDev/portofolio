"use client";

import { ThemeProvider } from "next-themes";
import { createContext, useContext, useState } from "react";

const providerContext = createContext();

export const Providers = ({ children }) => {
  const [data, setData] = useState();
  return (
    <providerContext.Provider value={{ data, setData }}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </providerContext.Provider>
  );
};

export const useProviders = () => useContext(providerContext);
