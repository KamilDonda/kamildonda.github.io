import { CurrencyRateApp } from "../../projects/CurrencyRateApp/CurrencyRateApp";
import { Section } from "../Section/Section";
import { useTranslation } from "react-i18next";

export function Projects() {
  const { t } = useTranslation();
  return <Section title={t("projects")} component={<CurrencyRateApp/>}/>;
}
