import "./Navigation.css";
import github from "../../../images/github.svg";
import linkedin from "../../../images/linkedin.svg";
import EmailIcon from "@mui/icons-material/Email";
import {
  ImageButton,
  ImageIconButton,
} from "../../components/image_button/ImageButton";

export function Navigation() {
  return (
    <>
      <div className="navigation margin">
        <ImageButton
          src={github}
          alt="GitHub"
          url="https://github.com/KamilDonda"
          text="GitHub"
        />
        <ImageButton
          src={linkedin}
          alt="LinkedIn"
          url="https://www.linkedin.com/in/kamil-donda/"
          text="LinkedIn"
        />
        <ImageIconButton
          icon={<EmailIcon />}
          url="mailto:dondakamil@gmail.com"
          text="dondakamil@gmail.com"
        />
      </div>
      <div className="small-space"></div>
    </>
  );
}
