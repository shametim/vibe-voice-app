import { createRoot } from "react-dom/client";
import { App } from "./src/app.tsx";
import "./src/styles.css";

document.addEventListener("DOMContentLoaded", () => {
    const root = createRoot(document.getElementById("root"));
    root.render(<App />);
});
