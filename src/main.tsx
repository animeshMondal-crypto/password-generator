import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className=" bg-gray-800 h-screen w-full flex justify-center">
      <App />
    </div>
  </React.StrictMode>
);
