import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@/styles/index";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!);

root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
