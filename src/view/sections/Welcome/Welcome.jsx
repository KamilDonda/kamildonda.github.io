import "./Welcome.css";
import photo from "../../../images/photo.jpg";
import { useTranslation } from "react-i18next";

export function Welcome() {
  const { t } = useTranslation();
  return (
    <>
      <div className="big-space"></div>
      <div id="welcome" className="margin big-space">
        <div id="welcome-left">
          <div>
            <span className="header gold">{t("hi")}</span>
            <h1>Kamil Donda</h1>
            <span className="header gold">Junior developer</span>
          </div>
        </div>
        <div id="welcome-right">
          <img id="photo" src={photo} alt="logo" />
        </div>
      </div>
      <div className="small-space"></div>
    </>
  );
}
