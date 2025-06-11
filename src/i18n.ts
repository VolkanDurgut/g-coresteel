import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // Çeviri dosyalarını yüklemek için backend'i kullan
  .use(initReactI18next) // i18n'i react-i18next ile bağla
  .init({
    fallbackLng: 'tr', // Eğer seçilen dilde çeviri yoksa Türkçe'yi kullan
    debug: true, // Geliştirme aşamasında konsolda hata ayıklama mesajlarını göster

    interpolation: {
      escapeValue: false, // React zaten XSS'e karşı koruduğu için gerekli değil
    },

    backend: {
      // Çeviri dosyalarının yolu
      loadPath: '/locales/{{lng}}/translation.json',
    },
  });

export default i18n;