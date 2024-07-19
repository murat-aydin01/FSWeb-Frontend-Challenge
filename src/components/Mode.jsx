import { toast } from 'react-toastify';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

function Mode() {
  const { language, changeLanguage } = useLanguage();
  const { darkMode, toggleDarkMode } = useTheme();

  const handleLanguageChange = () => {
    changeLanguage(language === 'en' ? 'tr' : 'en');
    toast(language === 'en' ? 'Language changed to English' : 'Dil Türkçe olarak değiştirildi');
  };

  return (
    <div className="flex justify-end">
      <div className="flex sm:gap-5 xs:gap-2 items-center">
        <div className="flex items-center">
          <label className="relative inline-flex items-center cursor-pointer sm:gap-2 xs:gap-1">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <div className="sm:w-12 sm:h-5 xs:w-6 xs:h-3 bg-[#777777] rounded-full peer peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800
                         sm:peer-checked:after:translate-x-7 xs:peer-checked:after:translate-x-3 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-pink-900 after:content-[''] 
                        after:absolute sm:after:top-1 xs:after:top-[2px] sm:after:start-[1px] xs:after:start-0 after:bg-yellow-300 after:border-black after:border after:rounded-full sm:after:h-4 sm:after:w-4 xs:after:h-3 xs:after:w-3 after:transition-all
                        dark:border-gray-600 peer-checked:bg-btn-purple"></div>
            <span className="font-Inter sm:text-base xs:text-xs font-bold dark:text-acik-dark text-acik">
              {language === 'en' ? 'DARK MODE' : 'KARANLIK MOD'}
            </span>
          </label>
        </div>
        <div className="font-Inter sm:text-base xs:text-xs font-bold text-acik">
          |
        </div>
        <div>
          <button onClick={handleLanguageChange} className="font-Inter sm:text-base xs:text-xs font-bold dark:text-acik-mor-dark text-acik-mor">
            {language === 'en' ? 'TURKISH' : 'ENGLISH'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mode;
