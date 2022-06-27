import React, { useEffect } from "react";
import { gsap } from "gsap";
import MyMenu from "../menujs/menus";
import "../css/menu/menu.css";
import { Helmet } from "react-helmet";

export default function Menu() {
  return (
    <body>
      <div className="page2">
        <main className="mains">
          <div className="cover-wrap" aria-hidden="true">
            <div className="cover">
              <div
                className="cover__inner"
                style={{ backgroundImage: "url(/expand/cover.jpg)" }}
              ></div>
            </div>
          </div>
          <div className="menu">
            <div className="menu__top">
              <h2 className="menu__title">Asor</h2>
              <nav className="menu__nav-top">
                <a href="#" className="line-link">
                  Clothing
                </a>
                <a href="#" className="line-link">
                  Dresses
                </a>
                <a href="#" className="line-link">
                  Accessories
                </a>
                <a href="#" className="line-link">
                  Brands
                </a>
              </nav>
              <div className="menu__side">
                <a href="#" className="line-link">
                  Login
                </a>
                <button className="unbuttons search" aria-label="Search">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <path
                      d="M7.5 1.667A5.84 5.84 0 0 1 13.333 7.5 5.84 5.84 0 0 1 7.5 13.333 5.84 5.84 0 0 1 1.667 7.5 5.84 5.84 0 0 1 7.5 1.667M7.5 15a7.463 7.463 0 0 0 4.693-1.66l6.383 6.415a.833.833 0 0 0 1.181-1.176l-6.39-6.422A7.453 7.453 0 0 0 15 7.5 7.508 7.508 0 0 0 7.5 0 7.508 7.508 0 0 0 0 7.5 7.508 7.508 0 0 0 7.5 15"
                      fill="#000"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="menu__content-wrap">
              <div className="menu__content">
                <nav className="menu__nav-content">
                  <div className="column1">
                    <h4 className="column__title">New In</h4>
                    <a href="#" className="line-link">
                      Blouses
                    </a>
                    <a href="#" className="line-link">
                      Jeans
                    </a>
                    <a href="#" className="line-link">
                      Blazers
                    </a>
                    <a href="#" className="line-link">
                      Trousers
                    </a>
                    <a href="#" className="line-link">
                      Lingerie
                    </a>
                    <a href="#" className="line-link">
                      Swimwear
                    </a>
                    <h4 className="column__title">Discounts</h4>
                    <a href="#" className="line-link">
                      T-Shirts
                    </a>
                    <a href="#" className="line-link">
                      Party
                    </a>
                    <a href="#" className="line-link">
                      Basics
                    </a>
                  </div>
                  <div className="column">
                    <h4 className="column__title">Trending</h4>
                    <a href="#" className="line-link">
                      New Season
                    </a>
                    <a href="#" className="line-link">
                      Holidays
                    </a>
                    <a href="#" className="line-link">
                      Going Out
                    </a>
                    <a href="#" className="line-link">
                      Workwear
                    </a>
                  </div>
                </nav>
                <button className="menu__back unbuttons">
                  <svg
                    width="10"
                    height="182"
                    viewBox="0 0 10 121"
                    preserveAspectRatio="xMidYMin meet"
                  >
                    <path d="M5 0 .5 9h9L5 0Zm.5 120.5V8h-1v113h1v-.5Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </main>
        {/* <Helmet>
          <script src="../menujs/menus.js" DOMContentLoaded></script>
        </Helmet> */}
      </div>
    </body>
  );
}
