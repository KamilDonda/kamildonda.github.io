import { About } from "../sections/About/About";
import { Welcome } from "../sections/Welcome/Welcome";
import { Hobbies } from "../sections/Hobbies/Hobbies";
import { Education } from "../sections/Education/Education";
import { Projects } from "../sections/Projects/Projects";
import { Footer } from "../sections/Footer/Footer";

export function HomePage() {
  return (
    <>
      <Welcome/>
      <About/>
      <Hobbies/>
      <Education/>
      <Projects/>
      <Footer/>
    </>
  );
}
