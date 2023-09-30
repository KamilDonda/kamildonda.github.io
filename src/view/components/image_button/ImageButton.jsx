import "./ImageButton.css";
import IconButton from "@mui/material/IconButton";

export function ImageButton({ src, alt, url, text }) {
  return (
    <IconButton
      className="image-button"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={src} alt={alt} />
      <span>{text}</span>
    </IconButton>
  );
}

export function ImageIconButton({ icon, url, text }) {
  return (
    <IconButton
      className="image-button icon-button"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <span>{text}</span>
    </IconButton>
  );
}
