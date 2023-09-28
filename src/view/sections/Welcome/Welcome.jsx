import "./Welcome.css";
import photo from "../../../images/photo.jpg";

export function Welcome() {
  return (
    <div id="welcome" className="margin">
      <div id="welcome-left">
        <div>
          <span className="header gold">Hi, I'm</span>
          <h1>Kamil Donda</h1>
          <span className="header gold">Junior developer</span>
        </div>
      </div>
      <div id="welcome-right">
        <img id="photo" src={photo} alt="logo" />
      </div>
    </div>
  );
}
