import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
  resources: {
    en: {
      translation: {
        hi: "Hi, I'm",
        about: "About",
        hobbies: "Hobbies",
        education: "Education",
        projects: "Projects",
        about_text:
          "I'm {{age}} years old. I study IT at the Silesian University of Technology. I had my first IT experiences in high school. At first I learned C++, but I liked Kotlin and I developed in this area. Currently I'm improving my skills in Flutter/Dart and Python.",
        hobbies_text:
          "Calisthenics, chess, team sports, IOT, Raspberry Pi, Arduino, DIY, security, movies and series",
        education_high_school: "High school",
        education_bachelor: "Bachelor's degree",
        education_master: "Master's degree",
        education_high_school_text:
          "Stefan Żeromski High School in Dąbrowa Górnicza",
        education_bachelor_text: "Silesian University of Technology",
        education_master_text: "Silesian University of Technology",
        source_code: "Source code",
        see_a_demo: "See a demo",
        views: "Views",
        features: "Features",
        working_demo: "Working demo",
        currency_rate_app_text:
          "Flutter Android application which shows currency exchange rates.",
        currency_rate_app_views: "There are 2 main views in the application:",
        currency_rate_app_view1:
          "The main view displaying available currencies (USD, EUR, GBP, CHF)",
        currency_rate_app_view2:
          "Detailed view divided into two sub-views containing data on the last 30 exchange rates:",
        currency_rate_app_view2_1: "List view",
        currency_rate_app_view2_2: "Chart view",
        currency_rate_app_features1a: "Displaying current",
        currency_rate_app_features1b: " exchange rate for 4 currencies.",
        currency_rate_app_features2a: "Displaying data for the last 30 days",
        currency_rate_app_features2b: ", including:",
        currency_rate_app_features2_1: "Date.",
        currency_rate_app_features2_2: "Buying rate.",
        currency_rate_app_features2_3: "Selling rate.",
        currency_rate_app_features2_4: "Daily average rate.",
        currency_rate_app_features3:
          "A chart showing the average daily rate for the last 30 days",
        currency_rate_app_features4:
          "Highlighting the highest exchange rate in green and the lowest in red.",
        currency_rate_app_features5:
          "Support for both portrait and landscape orientations.",
        currency_rate_app_features6:
          "On every application startup, data is fetched and then stored locally. If the device does not have internet connection upon restarting the application, the saved data is displayed and an appropriate message (snackbar) is shown.",
        currency_rate_app_features7:
          "After reconnection to the internet, data is fetched from the API.",
        currency_rate_app_features_text1:
          "Data comes from api.nbp.pl. The currently available data is retrieved from the API.",
        currency_rate_app_features_text2:
          "The data in the API is not updated daily, but only from Monday to Friday. The application retrieves the last 30 available data.",
        go_back: "Go back",
      },
    },
    pl: {
      translation: {
        hi: "Cześć, jestem",
        about: "O mnie",
        hobbies: "Moje zainteresowania",
        education: "Wykształcenie",
        projects: "Moje projekty",
        about_text:
          "Mam {{age}} lat. Studiuję informatykę na Politechnice Śląskiej. Pierwsze kroki związane z informatyką podjąłem w liceum. Na początku uczyłem się C++, ale spodobał mi się Kotlin i zacząłem się w tym kierunku rozwijać. Obecnie doskonalę swoje umiejętności w technologii Flutter/Dart oraz Python.",
        hobbies_text:
          "Szachy, kalistenika, sporty zespołowe, IOT, Raspberry Pi, Arduino, majsterkowanie, filmy, seriale",
        education_high_school: "Szkoła średnia",
        education_bachelor: "Studia inżynierskie",
        education_master: "Studia magisterskie",
        education_high_school_text:
          "II LO im. Stefana Żeromskiego w Dąbrowie Górniczej",
        education_bachelor_text: "Politechnika Śląska",
        education_master_text: "Politechnika Śląska",
        source_code: "Kod źródłowy",
        see_a_demo: "Zobacz demo",
        views: "Widoki",
        features: "Funkcjonalności",
        working_demo: "Demo",
        currency_rate_app_text:
          "Aplikacja na Androida napisana w technologii Flutter, która pokazuje kursy walut.",
        currency_rate_app_views: "W aplikacji znajdują się dwa główne widoki:",
        currency_rate_app_view1:
          "Widok główny, który wyświetla dostępne waluty (USD, EUR, GBP, CHF).",
        currency_rate_app_view2:
          "Widok szczegółowy podzielony na dwa podwidoki zawierające dane na temat ostatnich 30 kursów walut:",
        currency_rate_app_view2_1: "Widok listy.",
        currency_rate_app_view2_2: "Wykres.",
        currency_rate_app_features1a: "Wyświetlanie obecnego",
        currency_rate_app_features1b: " kursu dla 4 walut.",
        currency_rate_app_features2a:
          "Wyświetlanie danych dla ostatnich 30 dni",
        currency_rate_app_features2b: ", takie jak:",
        currency_rate_app_features2_1: "Data.",
        currency_rate_app_features2_2: "Kurs skupu.",
        currency_rate_app_features2_3: "Kurs sprzedaży.",
        currency_rate_app_features2_4: "Średni dzienny kurs.",
        currency_rate_app_features3:
          "Wykres pokazujący średni dzienny kurs dla ostatnich 30 dni",
        currency_rate_app_features4:
          "Podświetlenie najwyższego kursu na zielono, a najniższego na czerwono.",
        currency_rate_app_features5:
          "Wsparcie dla widoku pionowego oraz poziomego.",
        currency_rate_app_features6:
          "Przy każdym uruchomieniu aplikacji dane są pobierane i zapisywane lokalnie. Jeśli urządzenie nie ma połączenia z internetem po ponownym uruchomieniu aplikacji, wyświetlane są zapisane dane i pokazywana jest odpowiednia wiadomość w snackbarze.",
        currency_rate_app_features7:
          "Po ponownym połączeniu z internetem dane są pobierane z API.",
        currency_rate_app_features_text1:
          "Pobierane są aktualnie dostępne dane pochodzące z api.nbp.pl.",
        currency_rate_app_features_text2:
          "Dane w API nie są aktualizowane codziennie, a jedynie od poniedziałku do piątku. Aplikacja pobiera 30 ostatnio dostępnych danych.",
        go_back: "Wróć",
      },
    },
  },
});

export default i18n;
