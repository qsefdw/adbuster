"use client";

import { createContext, useContext, useState } from "react";

const AnalyzerContext = createContext(null);

export const Analyzerprovider = ({ children }) => {
  const [analyzedData, setAnalyzedData] = useState({});
  const [analyzedUrl, setAnalyzedUrl] = useState("");

  const value = {
    analyzedData,
    analyzedUrl,
    setAnalyzedData,
    setAnalyzedUrl,
  };

  return (
    <AnalyzerContext.Provider value={value}>
      {children}
    </AnalyzerContext.Provider>
  );
};

export const useAnalyzer = () => {
  const context = useContext(AnalyzerContext);
  if (!context) {
    throw new Error("useAnalyzer must be used within on AnalyzerProvider");
  }

  return context;
};
