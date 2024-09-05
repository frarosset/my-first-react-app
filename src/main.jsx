import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import { Message } from "./Message.jsx";
import TestConversion from "./TestConversion.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />
    <Message />
    <TestConversion />
  </StrictMode>
);
