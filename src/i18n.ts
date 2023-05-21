import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          greeting: "Hello!",
          language: "Language",
          display: "Display",
          searchTheCity: "Search the city",
          postalCode: "Postal code",
          numberOfInhabitants: "Number of inhabitants",
          // další překlady...
        },
      },
      sk: {
        translation: {
          greeting: "Ahoj! ",
          language: "Jazyk",
          display: "Zobrazenie",
          SearchTheCity: "Hladaj mesto",
          postalCode: "Postove smerovacie cislo",
          numberOfInhabitants: "Pocet obyvatelov",
          // další překlady...
        },
      },
    },
    lng: 'en', // výchozí jazyk
    fallbackLng: 'en', // výchozí jazyk, pokud překlad není k dispozici
    interpolation: {
      escapeValue: false, // nevyžadovat escapování režijních znaků
    },
  });

export default i18n;