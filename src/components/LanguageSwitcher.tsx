import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('tr')}
        className={`px-3 py-1 text-sm font-medium rounded-md ${i18n.language === 'tr' ? 'bg-secondary-500 text-white' : 'bg-gray-200 text-gray-700'}`}
      >
        TR
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 text-sm font-medium rounded-md ${i18n.language === 'en' ? 'bg-secondary-500 text-white' : 'bg-gray-200 text-gray-700'}`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;