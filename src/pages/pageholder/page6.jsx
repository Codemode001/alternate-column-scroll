import React from "react";
import "../../css/page/base.css";
import "../../css/page/demo6/button.css";
import Design5 from "../diffdesigns/design5";

export default function Page6() {
  return (
    <body className="demo-6">
      <main className="main">
        {/* <div className="contents">
          <div className="button6-wrap">
            <button className="button6">
              <div className="button6__deco"></div>
              <span className="button6__text">
                <span className="button6__text-inner">Explore</span>
              </span>
            </button>
          </div>
        </div> */}
        <div
          style={{
            height: "20rem",
            marginLeft: "0",
            position: "absolute",
            width: "100%",
            backgroundColor: "#312b35",
          }}
        >
          <Design5 />
        </div>
        <nav className="demos">
          <a href="page" className="demo" aria-label="Demo 1"></a>
          <a href="page2" className="demo" aria-label="Demo 2"></a>
          <a href="page3" className="demo" aria-label="Demo 3"></a>
          <a href="page4" className="demo" aria-label="Demo 4"></a>
          <a href="page5" className="demo" aria-label="Demo 5"></a>
          <a
            href="page6"
            className="demo demo--current"
            aria-label="Demo 6"
          ></a>
        </nav>
      </main>
      <svg className="cursor" width="25" height="25" viewBox="0 0 25 25">
        <circle className="cursor__inner" cx="12.5" cy="12.5" r="6.25" />
      </svg>
      <script src="js/demo.js"></script>
      <script src="js/demo6/index.js"></script>
    </body>
  );
}
