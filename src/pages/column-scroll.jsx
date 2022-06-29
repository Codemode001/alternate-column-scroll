import "../css/scroll/scroll.css";
import Scroll from "../scrolljs";
import Menu from "./menu";
import Button1 from "../buttons/button1";
import { Button } from "@mui/material";
import { useState } from "react";

export default function Test() {
  Scroll();
  //function to add buttons
  // const [btn, setbtn] = useState(" ");
  // const changebtn = () => {
  //   setbtn(<Button1 />);
  // };

  // const changebutton = () => {
  //   setbtn(" ");
  // };

  //scroll function

  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Alternate Column Scroll | Codrops</title>
        <meta
          name="description"
          content="A layout with an alternate scroll on image columns and a content preview."
        />
        <meta
          name="keywords"
          content="layout, scroll, locomotive scroll, column, javascript, web design"
        />
        <meta name="author" content="Codrops" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/njz5ajv.css" />
        <link rel="stylesheet" type="text/css" href="css/base.css" />
      </head>
      <body className="loading">
        <main>
          <div id="menu">
            {" "}
            <Menu />
          </div>
          <div class="frame">
            <h1 class="frame__title">Alternate Column Scroll</h1>
            <nav class="frame__links">
              <a href="https://tympanus.net/codrops/2021/12/01/grid-zoom-layout/">
                Previous demo
              </a>
              <a href="https://tympanus.net/codrops/?p=57959">Article</a>
              <a href="https://github.com/codrops/ColumnScroll/">GitHub</a>
            </nav>
            <span></span>
          </div>
          <h2 class="heading heading--up">Jack Ruthless</h2>
          <h2 class="heading heading--down">Jack Ruthless</h2>

          <div className="columns" data-scroll-container>
            <div className="column-wrap column-wrap--height">
              <div className="column">
                <figure className="column__item">
                  <div
                    className="column__item-imgwrap"
                    data-pos="2"
                    style={{ position: "relative", zIndex: "1" }}
                  >
                    <div
                      className="column__item-img"
                      style={{
                        backgroundImage: "url(/img/1.jpg)",
                      }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Cyber Blue</span>
                    <span>2011</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="5">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: "url(img/2.jpg)" }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Gnostic Will</span>
                    <span>2012</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="8">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: "url(img/3.jpg)" }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>French Kiss</span>
                    <span>2013</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="11">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: "url(img/4.jpg)" }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Half Life</span>
                    <span>2014</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="14">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: "url(img/5.jpg)" }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Love Boat</span>
                    <span>2015</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="17">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: "url(img/6.jpg)" }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Golden Ray</span>
                    <span>2016</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="20">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: "url(img/7.jpg)" }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Blame Game</span>
                    <span>2017</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="23">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: "url(img/8.jpg)" }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Lone Dust</span>
                    <span>2018</span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="column-wrap">
              <div className="column" data-scroll-section>
                <figure className="column__item">
                  <div
                    className="column__item-imgwrap"
                    data-pos="1"
                    styl={{ position: "relative", zIndex: 1 }}
                  >
                    <div
                      className="column__item-img"
                      style={{
                        backgroundImage: "url(img/9.jpg)",
                      }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Lucky Wood</span>
                    <span>2019</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="4">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: "url(img/10.jpg)" }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Good Earth</span>
                    <span>2020</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="7">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: "url(img/11.jpg)" }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Empty Words</span>
                    <span>2021</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="10">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: "url(img/12.jpg)" }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Nonage Line</span>
                    <span>2009</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="13">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: "url(img/13.jpg)" }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Blue Hell</span>
                    <span>2010</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="16">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: "url(img/14.jpg)" }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Cold Blood</span>
                    <span>2011</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="19">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: "url(img/15.jpg)" }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Tulip Heat</span>
                    <span>2012</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="22">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: "url(img/16.jpg)" }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Red Wrath</span>
                    <span>2013</span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="column-wrap column-wrap--height">
              <div className="column">
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="3">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: "url(img/17.jpg)" }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Bold Human</span>
                    <span>2014</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="6">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: "url(img/18.jpg)" }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Loyal Royal</span>
                    <span>2015</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="9">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: "url(img/19.jpg)" }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Lone Cone</span>
                    <span>2016</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="12">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: "url(img/20.jpg)" }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Dutch Green</span>
                    <span>2017</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="15">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: "url(img/21.jpg)" }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Valley Hill</span>
                    <span>2018</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="18">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: "url(img/22.jpg)" }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Kale Hale</span>
                    <span>2019</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="21">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: "url(img/23.jpg)" }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Fake Cake</span>
                    <span>2020</span>
                  </figcaption>
                </figure>
                <figure className="column__item">
                  <div className="column__item-imgwrap" data-pos="24">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: "url(img/24.jpg)" }}
                    ></div>
                  </div>
                  <figcaption className="column__item-caption">
                    <span>Book Belly</span>
                    <span>2021</span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content__item">
              <div>
                <h2 className="content__item-title">Lucky Wood</h2>
              </div>
              <div className="content__item-text">
                <span>
                  <Button1 />
                  Faith, you're driving me away You do it every day You don't
                  mean it But it hurts like hell
                </span>
                <span>2019</span>
              </div>
            </div>
            <div className="content__item">
              <h2 className="content__item-title">Cyber Blue</h2>
              <div className="content__item-text">
                <Button1 />
                <span>
                  My brain says I'm receiving pain A lack of oxygen From my life
                  support My iron lung
                </span>
                <span>2011</span>
              </div>
            </div>
            <div className="content__item">
              <h2 className="content__item-title">Bold Human</h2>
              <div className="content__item-text">
                <Button1 />
                <span>
                  We're too young to fall asleep Too cynical to speak We are
                  losing it Can't you tell?
                </span>
                <span>2014</span>
              </div>
            </div>
            <div className="content__item">
              <h2 className="content__item-title">Good Earth</h2>
              <div className="content__item-text">
                <Button1 />
                <span>
                  We scratch our eternal itch A twentieth century bitch And we
                  are grateful for Our iron lung
                </span>
                <span>2020</span>
              </div>
            </div>
            <div className="content__item">
              <h2 className="content__item-title">Gnostic Will</h2>
              <div className="content__item-text">
                <Button1 />
                <span>
                  The head shrinkers They want everything My Uncle Bill My
                  Belisha beacon
                </span>
                <span>2012</span>
              </div>
            </div>
            <div className="content__item">
              <h2 className="content__item-title">Loyal Royal</h2>
              <div className="content__item-text">
                <Button1 />
                <span>
                  The head shrinkers They want everything My Uncle Bill My
                  Belisha beacon
                </span>
                <span>2015</span>
              </div>
            </div>
            <div className="content__item">
              <h2 className="content__item-title">Empty Words</h2>
              <div className="content__item-text">
                <Button1 />
                <span>
                  Suck, suck your teenage thumb Toilet trained and dumb When the
                  power runs out We'll just hum
                </span>
                <span>2021</span>
              </div>
            </div>
            <div className="content__item">
              <h2 className="content__item-title">French Kiss</h2>
              <div className="content__item-text">
                <Button1 />
                <span>
                  This, this is our new song Just like the last one A total
                  waste of time My iron lung
                </span>
                <span>2013</span>
              </div>
            </div>
            <div className="content__item">
              <h2 className="content__item-title">Lone Cone</h2>
              <div className="content__item-text">
                <Button1 />
                <span>
                  And if you're frightened You can be frightened You can be,
                  it's OK
                </span>
                <span>2016</span>
              </div>
            </div>
            <div className="content__item">
              <h2 className="content__item-title">Nonage Line</h2>
              <div className="content__item-text">
                <Button1 />
                <span>
                  Lost in the mountain Rust in my brain The air is sacred here
                  In spite of your claim
                </span>
                <span>2009</span>
              </div>
            </div>
            <div className="content__item">
              <h2 className="content__item-title">Half Life</h2>
              <div className="content__item-text">
                <Button1 />
                <span>
                  Up on the rooftops Out of reach Trickster is meaningless
                  Trickster is weak
                </span>
                <span>2014</span>
              </div>
            </div>
            <div className="content__item">
              <h2 className="content__item-title">Dutch Green</h2>
              <div className="content__item-text">
                <Button1 />
                <span>He's talking out the world Talking out the world</span>
                <span>2017</span>
              </div>
            </div>
            <div className="content__item">
              <h2 className="content__item-title">Blue Hell</h2>
              <div className="content__item-text">
                <Button1 />
                <span>
                  Hey, hey, hey This is only halfway Hey, hey, hey This is only
                  halfway
                </span>
                <span>2010</span>
              </div>
            </div>
            <div className="content__item">
              <h2 className="content__item-title">Love Boat</h2>
              <div className="content__item-text">
                <Button1 />
                <span>
                  I wanted you so bad That I couldn't say All these things fall
                  apart
                </span>
                <span>2015</span>
              </div>
            </div>
            <div className="content__item">
              <h2 className="content__item-title">Valley Hill</h2>
              <div className="content__item-text">
                <Button1 />
                <span>
                  We wanted out so bad We couldn't say These things fall apart
                </span>
                <span>2018</span>
              </div>
            </div>
            <div className="content__item">
              <h2 className="content__item-title">Cold Blood</h2>
              <div className="content__item-text">
                <Button1 />
                <span>
                  Truant kids A can of brick dust worms Who do not want to climb
                  down from Their chestnut tree
                </span>
                <span>2011</span>
              </div>
            </div>
            <div className="content__item">
              <h2 className="content__item-title">Golden Ray</h2>
              <div className="content__item-text">
                <Button1 />
                <span>
                  Long white gloves Police tread carefully Escaped from the zoo
                  The perfect child facsimile is
                </span>
                <span>2016</span>
              </div>
            </div>
            <div className="content__item">
              <h2 className="content__item-title">Kale Hale</h2>
              <div className="content__item-text">
                <Button1 />
                <span>
                  Please could you stop the noise? I'm trying to get some rest
                  From all the unborn chicken voices in my head
                </span>
                <span>2019</span>
              </div>
            </div>
            <div className="content__item">
              <h2 className="content__item-title">Tulip Heat</h2>
              <div className="content__item-text">
                <Button1 />
                <span>What's that? I may be paranoid, but not an android</span>
                <span>2012</span>
              </div>
            </div>
            <div className="content__item">
              <h2 className="content__item-title">Blame Game</h2>
              <div className="content__item-text">
                <Button1 />
                <span>
                  When I am king you will be first against the wall With your
                  opinion which is of no consequence at all
                </span>
                <span>2017</span>
              </div>
            </div>
            <div className="content__item">
              <h2 className="content__item-title">Fake Cake</h2>
              <div className="content__item-text">
                <Button1 />
                <span>
                  Ambition makes you look pretty ugly Kicking and squealing,
                  Gucci little piggy
                </span>
                <span>2017</span>
              </div>
            </div>
            <div className="content__item">
              <h2 className="content__item-title">Red Wrath</h2>
              <div className="content__item-text">
                <Button1 />
                <span>
                  You don't remember, you don't remember Why don't you remember
                  my name?
                </span>
                <span>2013</span>
              </div>
            </div>
            <div className="content__item">
              <h2 className="content__item-title">Lone Dust</h2>
              <div className="content__item-text">
                <Button1 />
                <span>
                  Off with his head, man, off with his head, man Why don't you
                  remember my name? I guess he does
                </span>
                <span>2018</span>
              </div>
            </div>
            <div className="content__item">
              <h2 className="content__item-title">Book Belly</h2>
              <div className="content__item-text">
                <Button1 />
                <span>
                  Rain down, rain down Come on, rain down on me From a great
                  height From a great height, height
                </span>
                <span>2021</span>
              </div>
            </div>
            <nav className="content__nav">
              <div className="content__nav-wrap">
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: "url(img/25.jpg)" }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: "url(img/26.jpg)" }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: "url(img/27.jpg)" }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: "url(img/28.jpg)" }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: "url(img/29.jpg)" }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: "url(img/30.jpg)" }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: "url(img/31.jpg)" }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: "url(img/32.jpg)" }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: "url(img/33.jpg)" }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: "url(img/34.jpg)" }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: "url(img/35.jpg)" }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: "url(img/36.jpg)" }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: "url(img/37.jpg)" }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: "url(img/38.jpg)" }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: "url(img/39.jpg)" }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: "url(img/40.jpg)" }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: "url(img/41.jpg)" }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: "url(img/42.jpg)" }}
                ></div>
                <div
                  className="content__nav-item"
                  style={{ backgroundImage: "url(img/43.jpg)" }}
                ></div>
              </div>
            </nav>
            <button className="unbutton button-back">
              <svg viewBox="0 0 50 9" width="100%">
                <path d="M0 4.5l5-3M0 4.5l5 3M50 4.5h-77"></path>
              </svg>
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
