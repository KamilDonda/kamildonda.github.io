import { Section } from "../Section/Section";
import { getAge } from "../../../utils/Age";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();
  return (
    <Section
      title={t("about")}
      component={
        <span>
          {t("about_text", { age: getAge()})}
        </span>
      }
    />
  );
}
