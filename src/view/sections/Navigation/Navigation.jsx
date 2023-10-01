import "./Navigation.css";
import { Github } from "../../components/image_button/Github";
import { Linkedin } from "../../components/image_button/Linkedin";
import EmailIcon from "@mui/icons-material/Email";
import { ImageButton } from "../../components/image_button/ImageButton";
import { DarkModeToggle } from "../../components/dark_mode_toggle/DarkModeToggle";

export function Navigation() {
  return (
    <>
      <div className="navigation margin">
        <div className="nav-row">
          <ImageButton
            src={<Github />}
            url="https://github.com/KamilDonda"
            text="GitHub"
          />
          <ImageButton
            src={<Linkedin />}
            url="https://www.linkedin.com/in/kamil-donda/"
            text="LinkedIn"
          />
          <ImageButton
            src={<EmailIcon />}
            url="mailto:dondakamil@gmail.com"
            text="dondakamil@gmail.com"
          />
        </div>
        <DarkModeToggle />
      </div>
      <div className="small-space"></div>
    </>
  );
}
