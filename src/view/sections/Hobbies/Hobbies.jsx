import { Section } from "../Section/Section";
import { useTranslation } from "react-i18next";

export function Hobbies() {
  const { t } = useTranslation();
  return (
    <Section
      title={t("hobbies")}
      component={
        <span>
          {t("hobbies_text")}
        </span>
      }
    />
  );
}
