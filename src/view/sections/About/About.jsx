import { Section } from "../Section/Section";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();
  return (
    <Section
      title={t("about")}
      component={
        <span>
          {t("about_text")}
        </span>
      }
    />
  );
}
