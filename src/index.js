import { createRoot } from "react-dom/client";

import App from "./App";
import "./utils/i18n";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <App />
);
