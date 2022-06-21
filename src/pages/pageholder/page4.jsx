import React from "react";
import "../../css/page/base.css";
import "../../css/page/demo4/button.css";
import Design3 from "../diffdesigns/design3";

export default function Page4() {
  return (
    <body className="demo-4">
      <main className="main">
        <div className="contents">
          <button className="button4">
            <div className="button4__filler"></div>
            <span className="button4__text">
              <span className="button4__text-inner">Watch</span>
            </span>
          </button>
        </div>
        <div
          style={{
            marginLeft: "0",
            position: "absolute",
            width: "100%",
            backgroundColor: "#312b35",
          }}
        >
          <Design3 />
        </div>
        <nav className="demos">
          <a href="page" className="demo" aria-label="Demo 1"></a>
          <a href="page2" className="demo" aria-label="Demo 2"></a>
          <a href="page3" className="demo" aria-label="Demo 3"></a>
          <a
            href="page4.html"
            className="demo demo--current"
            aria-label="Demo 4"
          ></a>
          <a href="page5" className="demo" aria-label="Demo 5"></a>
          <a href="page6" className="demo" aria-label="Demo 6"></a>
        </nav>
      </main>
      <svg className="cursor" width="25" height="25" viewBox="0 0 25 25">
        <circle className="cursor__inner" cx="12.5" cy="12.5" r="6.25" />
      </svg>
      <script src="js/demo.js"></script>
      <script src="js/demo4/index.js"></script>
    </body>
  );
}
