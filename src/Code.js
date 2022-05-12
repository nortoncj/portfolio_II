import React from "react";
import "./code.css";
import Images from "./img/index.js";

export default function Code() {
  return (
    <>
      <div className="d-flex d-row justify-content-center ">
        <div className="d-flex d-column col-lg-3 col-md-3 col-sm-4 category justify-content-center">
          <ul className="skill">
            <li>
              <img
                className="code-badge"
                src={Images.js}
                alt="Javascript"
              ></img>{" "}
              JavaScript
            </li>
            <li>
              {" "}
              <img className="code-badge" src={Images.php} alt="PHP"></img>
              PHP
            </li>
            <li>
              {" "}
              <img
                className="code-badge"
                src={Images.matlab}
                alt="MatLab"
              ></img>
              MatLab
            </li>
            <li>
              {" "}
              <img
                className="code-badge"
                src={Images.python}
                alt="Python"
              ></img>
              Python
            </li>
            <li>
              {" "}
              <img className="code-badge" src={Images.java} alt="Java"></img>
              Java
            </li>
            <li>
              <img className="code-badge" src={Images.csharp} alt="C#"></img>
              C#
            </li>
          </ul>
        </div>
        <div className="d-flex d-columnd-flex d-column col-lg-3 col-md-3 col-sm-4 category ">
          <ul className="skill">
            <li>
              <img className="code-badge" src={Images.react} alt="React"></img>
              React
            </li>
            <li>
              <img
                className="code-badge"
                src={Images.laravel}
                alt="Laravel"
              ></img>
              Laravel
            </li>
            <li>
              <img
                className="code-badge"
                src={Images.bootstrap}
                alt="Bootstrap"
              ></img>
              Bootstrap
            </li>
            <li>
              <img
                className="code-badge"
                src={Images.django}
                alt="Django"
              ></img>
              Django
            </li>
            <li>
              <img className="code-badge" src={Images.sass} alt="Sass"></img>
              Sass
            </li>
            <li>
              <img className="code-badge" src={Images.net} alt=".Net"></img>
              ASP .NET
            </li>
          </ul>
        </div>
        <div className="d-flex d-column d-flex d-column col-lg-3 col-md-3 col-sm-4 category">
          <ul className="skill">
            <li>
              <img className="code-badge" src={Images.node} alt="Node JS"></img>
              Node JS
            </li>
            <li>
              <img
                className="code-badge"
                src={Images.mongo}
                alt="Mongo DB"
              ></img>
              Mongo DB
            </li>
            <li>
              <img className="code-badge" src={Images.mysql} alt="MySQL"></img>
              MySQL
            </li>
            <li>
              <img
                className="code-badge"
                src={Images.jquery}
                alt="Jquery"
              ></img>
              Jquery
            </li>
            <li>
              <img className="code-badge" src={Images.c} alt="C"></img>C
            </li>
            <li>
              <img className="code-badge" src={Images.git} alt="Git"></img>
              Git
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
