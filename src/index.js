import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./pages/column-scroll";
import Menu from "./pages/menu";
import PageHolder from "./pages/page-holder";

//pages
import Page2 from "./pages/pageholder/page2";
import Page3 from "./pages/pageholder/page3";
import Page4 from "./pages/pageholder/page4";
import Page5 from "./pages/pageholder/page5";
import Page6 from "./pages/pageholder/page6";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/page" element={<PageHolder />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="/page4" element={<Page4 />} />
      <Route path="/page5" element={<Page5 />} />
      <Route path="/page6" element={<Page6 />} />
    </Routes>
  </BrowserRouter>
);
