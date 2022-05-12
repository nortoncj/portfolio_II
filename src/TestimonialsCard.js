import React from "react";
import "./css/themify-icons.css";
import "./testimonialCard.css";

export default function Card({ name, title, avi, quote }) {
  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonial-card">
          <div className="top">
            <img src={avi} alt={name} className="testimonial-avi" />
          </div>
          <div className="center">{quote}</div>
          <div className="bottom">
            <h3 className="testimonial-name">{name}</h3>
            <h5 className="testimonial-title">{title}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
