import "./ImageButton.css";
import IconButton from "@mui/material/IconButton";

export function ImageButton({ src, url, text }) {
  return (
    <IconButton
      className="image-button icon-button"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {src}
      <span>{text}</span>
    </IconButton>
  );
}
