import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          greeting: "Hi! Here you can find a map of the Slovak Republic and its regional and district cities",
          language: "Language",
          display: "Display",
          searchTheCity: "Search the city",
          postalCode: "Postal code",
          numberOfInhabitants: "Number of inhabitants",
          city: "City",
          residents: "Residents",
          code: "Code",
          // další překlady...
        },
      },
      sk: {
        translation: {
          greeting: "Ahoj! Tu sa nachachadza mapa Slovenskej Republiky a jej krajske a okresne mesta ",
          language: "Jazyk",
          display: "Zobrazenie",
          SearchTheCity: "Hladaj mesto",
          postalCode: "Postove smerovacie cislo",
          numberOfInhabitants: "Pocet obyvatelov",
          city: "Mesto",
          residents: "Obyvatelov",
          code: "PSC",
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