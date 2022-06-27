import React from "react";
import "../../css/buttons/button2.css";

export default function Button2() {
  return (
    <body className="button-width">
      <button className="button2">
        <div className="button2__deco">
          <div className="button2__deco-filler"></div>
        </div>
        <span className="button2__text">
          <span className="button2__text-inner">Buy</span>
        </span>
      </button>
    </body>
  );
}
