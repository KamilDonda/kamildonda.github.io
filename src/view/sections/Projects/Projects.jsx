import { CurrencyRateApp } from "../../projects/CurrencyRateApp/CurrencyRateApp";
import { Section } from "../Section/Section";

export function Projects() {
  return <Section title="Projects" component={<CurrencyRateApp/>}/>;
}
