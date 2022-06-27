import React from "react";
import "../../css/page/base.css";
import "../../css/page/demo3/button.css";
import Design2 from "../diffdesigns/design2";

export default function Page3() {
  return (
    <body className="demo-3">
      <main className="main">
        {/* <div className="contents">
          <button className="button3">
            <span className="button3__text">
              <span className="button3__text-inner">Confirm</span>
            </span>
          </button>
        </div> */}
        <div
          style={{
            marginLeft: "0",
            position: "absolute",
            width: "100%",
            backgroundColor: "#312b35",
          }}
        >
          <Design2 />
        </div>
        <nav className="demos">
          <a href="/" className="demo" aria-label="Demo 1"></a>
          <a href="page2" className="demo" aria-label="Demo 2"></a>
          <a
            href="page3"
            className="demo demo--current"
            aria-label="Demo 3"
          ></a>
          <a href="page4" className="demo" aria-label="Demo 4"></a>
          <a href="page5" className="demo" aria-label="Demo 5"></a>
          <a href="page6" className="demo" aria-label="Demo 6"></a>
        </nav>
      </main>
      <svg className="cursor" width="25" height="25" viewBox="0 0 25 25">
        <circle className="cursor__inner" cx="12.5" cy="12.5" r="6.25" />
      </svg>
      <script src="js/demo.js"></script>
      <script src="js/demo3/index.js"></script>
    </body>
  );
}
