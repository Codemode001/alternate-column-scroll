import React from "react";
import "../../css/page/base.css";
import "../../css/page/demo2/button.css";
import Test from "../column-scroll";
import Design1 from "../diffdesigns/design1.jsx";
import "../../css/scroll/design1.css";
import Try from "../diffdesigns/design2";

export default function Page2() {
  return (
    <body className="demo-2">
      <main className="main">
        <div className="contents">
          {/* <button className="button2">
            <div className="button2__deco">
              <div className="button2__deco-filler"></div>
            </div>
            <span className="button2__text">
              <span className="button2__text-inner">enter</span>
            </span>
          </button> */}
        </div>
        <div
          style={{
            height: "20rem",
            marginLeft: "0",
            position: "absolute",
            width: "100%",
            backgroundColor: "#312b35",
          }}
        >
          <Design1 />
        </div>
        <nav className="demos">
          <a href="page" className="demo" aria-label="Demo 1"></a>
          <a
            href="page2"
            className="demo demo--current"
            aria-label="Demo 2"
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
      <script src="js/demo.js"></script>
      <script src="js/demo2/index.js"></script>
    </body>
  );
}
