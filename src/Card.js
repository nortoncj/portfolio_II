import React from "react";
import "./css/card.css";

export default function Card({ title, imageurl, link }) {
  return (
    <div className="card-container">
      <a href={link}>
        <div className="item">
          <span className="project-item">
            <img src={imageurl} alt={title} />
          </span>
          <h3>{title}</h3>
        </div>
      </a>
    </div>
  );
}
