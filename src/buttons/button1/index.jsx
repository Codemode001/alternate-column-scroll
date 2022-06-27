import React from "react";
import "../../css/buttons/button1.css";

export default function Button1() {
  return (
    <div>
      <button className="button1">
        <span className="button1__text-inner" style={{ marginBottom: "1rem" }}>
          Buy
        </span>
      </button>
    </div>
  );
}
