import React from "react";
import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { gsap } from "gsap/all";

export default function Projects() {
  return (
    <>
      <div class="menu">
        <div class="menu--wrapper container">
          <div className="row">
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

            <div class="menu--item col ">
              <figure>
                <Card
                  link="http://nurseryofkickz.com/"
                  title=" Nursery of Kickz"
                  imageurl={require("./img/nursery.jpg")}
                  body="E-commerce Website build with PHP, MYSQL and Bootstrap. It allows the user to make purchase using sessions ran through the PayPal API."
                ></Card>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
