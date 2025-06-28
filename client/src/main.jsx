import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import EditExcuse from "./components/EditExcuse.jsx"; // 👈 Import your edit page
import "./index.css"; // or tailwind/app styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/edit/:id" element={<EditExcuse />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
