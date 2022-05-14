import React from "react";
import "./css/card.css";

export default function Card({ title, imageurl, link }) {
  return (
    <div className="card-container">
      <div className="item">
        <a href={link}>
          <span className="project-item">
            <img src={imageurl} alt={title} />
          </span>
        </a>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
