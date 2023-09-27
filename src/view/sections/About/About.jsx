import { Section } from "../Section/Section";

export function About() {
  return (
    <Section
      title="About"
      component={
        <span>
          I'm 24 years old. I study IT at the Silesian University of Technology.
          I had my first IT experiences in high school. At first I learned C++,
          but I liked Kotlin and I developed in this area. Currently I'm improving
          my skills in Flutter/Dart and Python.
          {/* &nbsp; */}
        </span>
      }
    />
  );
}
