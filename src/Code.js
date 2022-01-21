import React from "react";
import "./code.css";

export default function Code() {
  return (
    <>
      <div className="d-flex d-row ">
        <div className="d-flex d-column col-lg-3 col-md-3 col-sm-4 category">
          <ul className="skill">
            <li>
              <img
                className="code-badge"
                src={require("./img/js.png")}
                alt="Javascript"
              ></img>{" "}
              JavaScript
            </li>
            <li>
              {" "}
              <img
                className="code-badge"
                src={require("./img/php.png")}
                alt="PHP"
              ></img>
              PHP
            </li>
            <li>
              {" "}
              <img
                className="code-badge"
                src={require("./img/matlab.png")}
                alt="MatLab"
              ></img>
              MatLab
            </li>
            <li>
              {" "}
              <img
                className="code-badge"
                src={require("./img/python.png")}
                alt="Python"
              ></img>
              Python
            </li>
            <li>
              {" "}
              <img
                className="code-badge"
                src={require("./img/java.png")}
                alt="Java"
              ></img>
              Java
            </li>
            <li>
              <img
                className="code-badge"
                src={require("./img/c-sharp.png")}
                alt="C#"
              ></img>
              C#
            </li>
          </ul>
        </div>
        <div className="d-flex d-columnd-flex d-column col-lg-3 col-md-3 col-sm-4 category ">
          <ul className="skill">
            <li>
              <img
                className="code-badge"
                src={require("./img/react.png")}
                alt="React"
              ></img>
              React
            </li>
            <li>
              <img
                className="code-badge"
                src={require("./img/laravel.png")}
                alt="Laravel"
              ></img>
              Laravel
            </li>
            <li>
              <img
                className="code-badge"
                src={require("./img/bootstrap.png")}
                alt="Bootstrap"
              ></img>
              Bootstrap, Bulma
            </li>
            <li>
              <img
                className="code-badge"
                src={require("./img/dj.png")}
                alt="Django"
              ></img>
              Django
            </li>
            <li>
              <img
                className="code-badge"
                src={require("./img/sass.png")}
                alt="Sass"
              ></img>
              Sass
            </li>
            <li>
              <img
                className="code-badge"
                src={require("./img/net.png")}
                alt=".Net"
              ></img>
              ASP .NET
            </li>
          </ul>
        </div>
        <div className="d-flex d-column d-flex d-column col-lg-3 col-md-3 col-sm-4 category">
          <ul className="skill">
            <li>
              <img
                className="code-badge"
                src={require("./img/node.png")}
                alt="Node JS"
              ></img>
              Node JS
            </li>
            <li>
              <img
                className="code-badge"
                src={require("./img/mongo.png")}
                alt="Mongo DB"
              ></img>
              Mongo DB
            </li>
            <li>
              <img
                className="code-badge"
                src={require("./img/mysql.png")}
                alt="MySQL"
              ></img>
              MySQL
            </li>
            <li>
              <img
                className="code-badge"
                src={require("./img/jquery.png")}
                alt="Jquery"
              ></img>
              Jquery
            </li>
            <li>
              <img
                className="code-badge"
                src={require("./img/c.png")}
                alt="C"
              ></img>
              C
            </li>
            <li>
              <img
                className="code-badge"
                src={require("./img/git.png")}
                alt="Git"
              ></img>
              Git
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
