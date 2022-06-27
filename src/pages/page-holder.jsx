import React from "react";
import "../css/page/base.css";
import "../css/page/demo1/button.css";
import Test from "./column-scroll";
import Design1 from "./diffdesigns/design1";
import { Cursor } from "./magneticbuttonsjs/cursor";
import { ButtonCtrl } from "./magneticbuttonsjs/demo1/buttonCtrl";

// const cursor = new Cursor(document.querySelector(".cursor"));

// setTimeout(() => document.body.classList.add("render"), 60);
// const navdemos = Array.from(document.querySelectorAll("nav.demos > .demo"));
// const navigate = (linkEl) => {
//   document.body.classList.remove("render");
//   document.body.addEventListener(
//     "transitionend",
//     () => (window.location = linkEl.href)
//   );
// };
// navdemos.forEach((link) =>
//   link.addEventListener("click", (ev) => {
//     ev.preventDefault();
//     navigate(ev.target);
//   })
// );

export default function PageHolder() {
  const handleClick = (event) => {
    const demos = document.querySelector(".demo");
    const testing = document.querySelector(".header__title");
    const change = document.querySelector(".page1");

    if (event == "clicked") {
      change.style.backgroundColor = "#312b35";
      console.log("clicked");
    }
  };

  return (
    <body className="demo-1">
      <main className="main">
        {/* <header
          className="header"
          style={{
            zIndex: "2",
            position: "absolute",
            backgroundColor: "#ee8233",
            width: "100%",
          }}
        >
          <h1 className="header__title">
            Magnetic Buttons inspired by{" "}
            <a href="https://cuberto.com/services/">Cuberto</a>
          </h1>
          <div className="header__links">
            <a href="https://tympanus.net/Development/RapidImageHoverMenuEffects/">
              Previous demo
            </a>
            <a href="https://tympanus.net/codrops/?p=50513">Article</a>
            <a href="https://github.com/codrops/MagneticButtons/">GitHub</a>
          </div>
        </header> */}
        <div
          style={{
            marginLeft: "0",
            position: "absolute",
            width: "100%",
          }}
        >
          <Test />
        </div>

        {/* <div className="contents">
          <button className="button1">
            <span className="button1__text">
              <span className="button1__text-inner">Send</span>
            </span>
          </button>
        </div> */}
        <nav className="demos">
          <a href="/" className="demo demo--current" aria-label="Demo 1"></a>
          <a
            href="page2"
            className="demo"
            aria-label="Demo 2"
            onClick={() => handleClick("clicked")}
          ></a>
          <a href="page3" className="demo" aria-label="Demo 3"></a>
          <a href="page4" className="demo" aria-label="Demo 4"></a>
          <a href="page5" className="demo" aria-label="Demo 5"></a>
          <a href="page6" className="demo" aria-label="Demo 6"></a>
        </nav>
      </main>
      <svg className="cursor" width="25" height="25" viewBox="0 0 25 25">
        <circle className="cursor__inner" cx="12.5" cy="12.5" r="6.25" />
      </svg>
    </body>
  );
}
