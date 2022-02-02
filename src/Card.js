import React from "react";
import "./css/card.css";

export default function Card({ title, imageurl, body, link }) {
  return (
    <>
      <a href={link} target="_top" class="album-item">
        <div className="card-container">
          <div className="image-container">
            <img src={imageurl} alt={title}></img>
          </div>
          <div className="card-title">{title}</div>

          <div className="card-body">{body}</div>
        </div>
      </a>
    </>
  );
}
