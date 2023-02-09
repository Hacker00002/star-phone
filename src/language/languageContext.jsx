import { createContext, useState } from "react";

export const languageContext = createContext({});

export const LanguageContextProvider = ({ children }) => {
  const [lang, setLanguage] = useState("Russian");
  return (
    <languageContext.Provider
      value={{
        lang: lang,
        setLanguage: setLanguage,
      }}
    >
      {children}
    </languageContext.Provider>
  );
};
