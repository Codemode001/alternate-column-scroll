import React from "react";
import "../../css/buttons/button5.css";

export default function Button5() {
  return (
    <body className="button5-body">
      <div className="contents">
        <button className="button5">
          <div className="button5__deco button5__deco--2"></div>
          <div className="button5__deco button5__deco--1"></div>
          <span className="button5__text">
            <span className="button5__text-inner">start</span>
          </span>
        </button>
      </div>
    </body>
  );
}
