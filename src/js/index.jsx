import { preloadImages } from "./utils";
import { Grid } from "./grid";
import React from "react";

export default function Scroll() {
  return (
    // Preload images then remove loader (loading class) from body
    preloadImages(".column__item-img").then(() => {
      document.body.classList.remove("loading");

      // Initialize the grid
      new Grid(document.querySelector(".columns"));
    })
  );
}
