import "./LangToggle.css";
import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";
import createPersistedState from "use-persisted-state";

const useLanguageState = createPersistedState("language");

export function LangToggle() {
  const EN = "en";
  const PL = "pl";
  const ACTIVE = "lang-toggle-active";
  const INACTIVE = "lang-toggle-inactive";

  const defaultLanguage = () => {
    const userLocale =
      navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language;

    if (userLocale.includes(PL)) {
      return PL;
    } else {
      return EN;
    }
  };

  const { i18n } = useTranslation();
  const [language, setLanguage] = useLanguageState(defaultLanguage());

  const switchLanguage = () => {
    // console.log("switchLanguage: from: " + language);
    const newLanguage = language === EN ? PL : EN;
    setLanguage(newLanguage);
    document.documentElement.lang = newLanguage;
    i18n.changeLanguage(newLanguage);
    // console.log("switchLanguage: to: " + newLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    i18n.changeLanguage(language);
    // console.log("useEffect: to: " + language);
  }, [language, i18n]);

  const className = (lang) => {
    return language === lang ? ACTIVE : INACTIVE;
  };

  return (
    <div id="lang-toggle" onClick={switchLanguage}>
      <span className={className(EN)}>EN</span>
      <span className="lang-toggle-slash">/</span>
      <span className={className(PL)}>PL</span>
    </div>
  );
}
