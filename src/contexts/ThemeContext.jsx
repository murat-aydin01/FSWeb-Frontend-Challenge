import { createContext, useContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { toast } from 'react-toastify';
import { useLanguage } from './LanguageContext';


const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  const {language} = useLanguage();
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
    const message = !darkMode
      ? (language === 'en' ? 'Dark mode enabled' : 'Karanlık mod etkinleştirildi')
      : (language === 'en' ? 'Dark mode disabled' : 'Karanlık mod devre dışı bırakıldı');
    toast(message);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
