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

//buttons
import Button1 from "./buttons/button1";
import Button2 from "./buttons/button2";
import Button3 from "./buttons/button3";
import Button4 from "./buttons/button4";
import Button5 from "./buttons/button5";
import Button6 from "./buttons/button6";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Test />} />

      {/*removed pages */}
      <Route path="/menu" element={<Menu />} />
      <Route path="/page1" element={<PageHolder />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="/page4" element={<Page4 />} />
      <Route path="/page5" element={<Page5 />} />
      <Route path="/page6" element={<Page6 />} />
      <Route path="/button" element={<Button1 />} />
      <Route path="/button2" element={<Button2 />} />
      <Route path="/button3" element={<Button3 />} />
      <Route path="/button4" element={<Button4 />} />
      <Route path="/button5" element={<Button5 />} />
      <Route path="/button6" element={<Button6 />} />
    </Routes>
  </BrowserRouter>
);
