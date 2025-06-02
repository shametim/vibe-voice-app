import { createRoot } from "react-dom/client";
import { App } from "./app2.tsx";


function start() {
    const root = createRoot(document.getElementById("root")!);
    root.render(<App />);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
} else {
    start();
}
