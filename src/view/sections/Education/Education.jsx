import { Timeline } from "../../components/timeline/Timeline";
import { Section } from "../Section/Section";
import { useTranslation } from "react-i18next";

export function Education() {
  const { t } = useTranslation();
  return <Section title={t("education")} component={<Timeline />} />;
}
