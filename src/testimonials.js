import React from "react";
import "./testimonial.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Joe Nurse (business owner)",
      text: "This guy is the hardest working man in the business! Professional and a team player.",
    },
    {
      name: "Dr. Ronald Gilbert, DC",
      text: "Chris gave my website a complete overhaul. It was above my expectations.",
    },
    {
      name: "Phuy Tran (Senior Developer)",
      text: "We asked for a rockstar developer and that's exactly what we got! Constantly raising the bar.",
    },
  ];
  return (
    <>
      <div className="row mx-5">
        {testimonials.map((value) => {
          return (
            <div className="col-lg-4 col-sm-12 col-md-6">
              <div className="card shadow testimonial-card d-flex flex-column">
                <span className="description">{value.text}</span>
                <span className="testimonial-name">-{value.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
