import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./pages/column-scroll";
import Menu from "./pages/menu";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  </BrowserRouter>
);
