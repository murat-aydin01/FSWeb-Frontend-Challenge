import { createContext } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import en from '../localization/en';
import tr from '../localization/tr';
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('tr');

  const texts = language === 'en' ? en : tr;

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
