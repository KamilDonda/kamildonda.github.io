import "./DemoPopup.css";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function DemoPopup({ id, src, title, demo, onClick }) {
  return (
    <div className={demo ? "demo-popup demo-popup-visible" : "demo-popup"}>
      <iframe id={id} src={src} title={title}></iframe>
      <div className="background-back-button">
        <IconButton onClick={onClick} className="rotate-button">
          <ArrowBackIcon />
          <span className="back-button">Go back</span>
        </IconButton>
      </div>
    </div>
  );
}
