import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import MyMenu from "../menujs/menus";
import "../css/menu/menu.css";
import { Helmet } from "react-helmet";

export default function Menu() {
  const DOM = {
    // For demo purposes, trigger the effect when clicking any link in the menu (.line-link)
    menuLinks: [...document.querySelectorAll(".line-link")],
    // Cover element (wrap, outer and image inner elements)
    cover: {
      wrap: document.querySelector(".cover-wrap"),
      outer: document.querySelector(".cover"),
      inner: document.querySelector(".cover__inner"),
    },
    // Some of the main page content elements
    // We'll animate some of the content elements when expanding the menu
    content: {
      imgs: [...document.querySelectorAll(".content > .content__img")],
      titles: [...document.querySelectorAll(".content > .content__title")],
    },
    menu: document.querySelector(".menu"),

    menuContent: document.querySelector(".menu__content"),

    closeCtrl: document.querySelector(".menu__back"),

    extra: document.querySelectorAll(".menu__tagline, .menu__social-author"),
  };

  let menuStatus = {
    isOpen: false,
    isAnimating: false,
  };

  // Animation gsap timeline
  const menuTimeline = gsap
    .timeline({
      paused: true,
      onComplete: () => (menuStatus.isAnimating = false),
      onReverseComplete: () => (menuStatus.isAnimating = false),
      defaults: {
        duration: 1.2,
        ease: "power4.inOut",
      },
    })
    .addLabel("start", 0)
    .add(() => {
      // Add pointer events to auto/none
      DOM.menu.classList[menuStatus.isOpen ? "add" : "remove"]("menu--open");
    }, "start")
    .to(
      DOM.cover.wrap,
      {
        duration: 1.6,
        startAt: { scale: "1.1" },
        ease: "power3.inOut",
        scale: 1,
      },
      "start"
    )
    .to(
      DOM.cover.outer,
      {
        startAt: { y: "-100%" },
        y: "0%",
      },
      "start"
    )
    .to(
      DOM.cover.inner,
      {
        startAt: { y: "100%" },
        y: "0%",
      },
      "start"
    )
    .to(
      DOM.content.imgs,
      {
        //ease: 'power3.inOut',
        y: (position) => `${position % 2 === 0 ? -20 : 20}%`,
      },
      "start"
    )
    .to(
      DOM.content.titles,
      {
        //ease: 'power3.inOut',
        y: (position) => `${position % 2 === 0 ? 20 : -20}%`,
      },
      "start"
    )
    .addLabel("menu", 0.5)
    .to(
      DOM.menuContent,
      {
        duration: 1,
        startAt: { y: "-100%" },
        y: "0%",
      },
      "menu"
    )
    .addLabel("extra", "menu+=0.6")
    .set(
      DOM.extra,
      {
        y: "400%",
        opacity: 0,
      },
      "start"
    )
    .to(
      DOM.extra,
      {
        duration: 0.5,
        ease: "power4",
        startAt: { opacity: 1 },
        opacity: 1,
        y: "0%",
      },
      "extra"
    );

  // Menu expand
  const expandMenu = () => {
    if (menuStatus.isAnimating || menuStatus.isOpen) return;
    menuStatus.isAnimating = true;
    menuStatus.isOpen = true;
    menuTimeline.play();
  };

  // Menu collapse
  const collapseMenu = () => {
    if (menuStatus.isAnimating || !menuStatus.isOpen) return;
    menuStatus.isAnimating = true;
    menuStatus.isOpen = false;
    menuTimeline.reverse(0);
  };

  DOM.menuLinks.forEach((link) => {
    link.addEventListener("click", (ev) => {
      ev.preventDefault();
      expandMenu();
    });
  });

  console.log(DOM.closeCtrl);

  return (
    <html>
      <head className="head1">
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Expanding Rounded Menu | Codrops</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="Codrops" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/lon4huw.css" />
        <link rel="stylesheet" type="text/css" href="css/base.css" />
      </head>
      <body className="demo-1">
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
                  <a
                    href="#"
                    className="line-link"
                    onClick={() => console.log("hello")}
                  >
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
                  <button
                    type="button"
                    className="menu__back unbuttons"
                    onClick={() => console.log("hello")}
                  >
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
    </html>
  );
}
