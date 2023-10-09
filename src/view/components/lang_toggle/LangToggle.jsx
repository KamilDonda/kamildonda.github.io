import "./LangToggle.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function LangToggle() {
  const EN = "en";
  const PL = "pl";
  const ACTIVE = "lang-toggle-active";
  const INACTIVE = "lang-toggle-inactive";

  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(EN);

  const switchLanguage = () => {
    const newLanguage = language === EN ? PL : EN;
    setLanguage(newLanguage);
    console.log(newLanguage);
    document.documentElement.lang = newLanguage;
    i18n.changeLanguage(newLanguage);
  };

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
