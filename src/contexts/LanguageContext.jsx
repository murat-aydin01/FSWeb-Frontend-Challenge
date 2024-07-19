import { createContext, useContext, useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import useLocalStorage from '../hooks/useLocalStorage';
import useAxios from '../hooks/useAxios';
import { toast } from 'react-toastify';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage('language', 'en');
  const queryClient = useQueryClient();

  const { data: texts, isLoading: loading, isError: error, refetch } = useQuery({
    queryKey: ['texts', language],
    queryFn: () => useAxios(`${language}`, {}),
    keepPreviousData: true,
    
  });

  const changeLanguage = (lang) => {
    setLanguage(lang);
    refetch();
    

  };

  if (loading) return <div className='h-screen flex justify-center items-center text-9xl text-acik-mor'>Loading...</div>;
  if (error) return <div className='h-screen flex justify-center items-center text-9xl text-acik-mor'>Error loading data</div>;

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
