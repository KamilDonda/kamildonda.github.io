import { About } from "../sections/About/About";
import { Welcome } from "../sections/Welcome/Welcome";
import { Hobbies } from "../sections/Hobbies/Hobbies";
import { Education } from "../sections/Education/Education";
import { Projects } from "../sections/Projects/Projects";
import { Footer } from "../sections/Footer/Footer";
import { Navigation } from "../sections/Navigation/Navigation";

export function HomePage() {
  return (
    <>
      <Navigation />
      <Welcome />
      <About />
      <Hobbies />
      <Education />
      <Projects />
      <Footer />
    </>
  );
}
