import React from "react";
import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { gsap } from "gsap/all";

function cardSlider() {
  const $menu = document.querySelector(".menu");
  const $items = document.querySelectorAll(".menu--item");
  const $images = document.querySelectorAll(".menu--item img");
  let menuWidth = $menu.clientWidth;
  let itemWidth = $items[0].clientWidth;
  let wrapWidth = $items.length * itemWidth;

  let scrollSpeed = 0;
  let oldScrollY = 0;
  let scrollY = 0;
  let y = 0;

  /*--------------------
Lerp
--------------------*/
  const lerp = (v0, v1, t) => {
    return v0 * (1 - t) + v1 * t;
  };

  /*--------------------
Dispose
--------------------*/
  const dispose = (scroll) => {
    gsap.set($items, {
      x: (i) => {
        return i * itemWidth + scroll;
      },
      modifiers: {
        x: (x, target) => {
          const s = gsap.utils.wrap(
            -itemWidth,
            wrapWidth - itemWidth,
            parseInt(x)
          );
          return `${s}px`;
        },
      },
    });
  };
  dispose(0);

  /*--------------------
Wheel
--------------------*/
  const handleMouseWheel = (e) => {
    scrollY -= e.deltaY * 0.9;
  };

  /*--------------------
Touch
--------------------*/
  let touchStart = 0;
  let touchX = 0;
  let isDragging = false;
  const handleTouchStart = (e) => {
    touchStart = e.clientX || e.touches[0].clientX;
    isDragging = true;
    $menu.classList.add("is-dragging");
  };
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    touchX = e.clientX || e.touches[0].clientX;
    scrollY += (touchX - touchStart) * 2.5;
    touchStart = touchX;
  };
  const handleTouchEnd = () => {
    isDragging = false;
    $menu.classList.remove("is-dragging");
  };

  /*--------------------
Listeners
--------------------*/
  $menu.addEventListener("mousewheel", handleMouseWheel);

  $menu.addEventListener("touchstart", handleTouchStart);
  $menu.addEventListener("touchmove", handleTouchMove);
  $menu.addEventListener("touchend", handleTouchEnd);

  $menu.addEventListener("mousedown", handleTouchStart);
  $menu.addEventListener("mousemove", handleTouchMove);
  $menu.addEventListener("mouseleave", handleTouchEnd);
  $menu.addEventListener("mouseup", handleTouchEnd);

  $menu.addEventListener("selectstart", () => {
    return false;
  });

  /*--------------------
Resize
--------------------*/
  window.addEventListener("resize", () => {
    menuWidth = $menu.clientWidth;
    itemWidth = $items[0].clientWidth;
    wrapWidth = $items.length * itemWidth;
  });

  /*--------------------
Render
--------------------*/
  const render = () => {
    requestAnimationFrame(render);
    y = lerp(y, scrollY, 0.1);
    dispose(y);

    scrollSpeed = y - oldScrollY;
    oldScrollY = y;

    gsap.to($items, {
      skewX: -scrollSpeed * 0.2,
      rotate: scrollSpeed * 0.01,
      scale: 1 - Math.min(100, Math.abs(scrollSpeed)) * 0.003,
    });
  };
  render();
}

export default function Projects() {
  return (
    <>
      <div class="menu">
        <div class="menu--wrapper container">
          <div className="row">
            <div class="menu--item col ">
              <figure>
                <Card
                  link="#"
                  title=" Nursery of Kickz"
                  imageurl={require("./img/nursery.jpg")}
                  body="E-commerce Website build with PHP, MYSQL and Bootstrap. It allows the user to make purchase using sessions ran through the PayPal API."
                ></Card>
              </figure>
            </div>

            <div class="menu--item col">
              <figure>
                <Card
                  link="#"
                  title="Tech News"
                  imageurl={require("./img/Blog.png")}
                  body="Personal blog website built off the MERN stack. It includes rolebased security system, a Markdown blog and a front end built with Jquery and React."
                ></Card>
              </figure>
            </div>
          </div>
          <div className="row">
            <div class="menu--item col">
              <figure>
                <Card
                  link="#"
                  title="One Shop"
                  imageurl={require("./img/oneshop.jpg")}
                  body="E-commerce Management platform built by a team with PHP, Node JS, JQuery and MYSQL."
                ></Card>
              </figure>
            </div>
            <div class="menu--item col">
              <figure>
                <Card
                  link="#"
                  title="U.W.S"
                  imageurl={require("./img/uws.jpg")}
                  body="Doctor's office website built for alternative healing. I created a database and did frontend work. "
                ></Card>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>

    // <div className="app">
    //   <div id="album-rotator-holder">
    //     <Card
    //       link="#"
    //       title=" Nursery of Kickz"
    //       imageurl={require("./img/nursery.jpg")}
    //       body="E-commerce Website build with PHP, MYSQL and Bootstrap. It allows the user to make purchase using sessions ran through the PayPal API."
    //     ></Card>

    //     <Card
    //       link="#"
    //       title=" Blog"
    //       imageurl={require("./img/Blog.png")}
    //       body="Person blog website built off the MERN stack. It includes rolebased security system, a Markdown blog and a front end built with Jquery and React."
    //     ></Card>

    //     <Card
    //       link="#"
    //       title=" One Shop"
    //       imageurl={require("./img/oneshop.jpg")}
    //       body="E-commerce Management platform built off of PHP, Node JS, JQuery and MYSQL."
    //     ></Card>
    //   </div>
    // </div>
    // START
    // END
  );
}
