import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    
    // Update document direction for Arabic
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1 px-2 py-2 rounded-lg bg-primary-50 hover:bg-primary-100 transition-colors duration-200 border border-primary-200 rtl:space-x-reverse"
    >
      <div className="w-4 h-4 rounded-full overflow-hidden border border-gray-300">
        {i18n.language === 'en' ? (
          // US Flag
          <div className="w-full h-full bg-gradient-to-b from-red-500 via-white to-blue-500 flex items-center justify-center">
            <span className="text-[8px] font-bold text-blue-800">EN</span>
          </div>
        ) : (
          // Arabic Flag (or generic Arabic indicator)
          <div className="w-full h-full bg-gradient-to-r from-red-600 via-white to-black flex items-center justify-center">
            <span className="text-[8px] font-bold text-green-800">ع</span>
          </div>
        )}
      </div>
      <span className="text-xs lg:text-sm font-medium text-gray-700 hidden lg:inline">
        {i18n.language === 'en' ? 'العربية' : 'English'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
