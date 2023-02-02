// REACT 18
import ReactDOM from "react-dom/client";
import App from "./App";

// getting root of DOM
const rootContainer = document.getElementById("root") as HTMLElement;
// pass root to ReactDOM
const root = ReactDOM.createRoot(rootContainer)
root.render(<App />)