import React from "react";
import "../../css/page/base.css";
import "../../css/page/demo5/button.css";
import Design4 from "../diffdesigns/design4";

export default function Page5() {
  return (
    <body className="demo-5">
      <main className="main">
        <div
          style={{
            marginLeft: "0",
            position: "absolute",
            width: "100%",
            backgroundColor: "#312b35",
          }}
        >
          <Design4 />
        </div>
        <nav className="demos">
          <a href="/" className="demo" aria-label="Demo 1"></a>
          <a href="page2" className="demo" aria-label="Demo 2"></a>
          <a href="page3" className="demo" aria-label="Demo 3"></a>
          <a href="page4" className="demo" aria-label="Demo 4"></a>
          <a
            href="page5"
            className="demo demo--current"
            aria-label="Demo 5"
          ></a>
          <a href="page6" className="demo" aria-label="Demo 6"></a>
        </nav>
      </main>
      <svg className="cursor" width="25" height="25" viewBox="0 0 25 25">
        <circle className="cursor__inner" cx="12.5" cy="12.5" r="6.25" />
      </svg>
      <script src="js/demo.js"></script>
      <script src="js/demo5/index.js"></script>
    </body>
  );
}
