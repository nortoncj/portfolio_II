import React from "react";
import Card from "./TestimonialsCard";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <Card
          name="Mark Norris"
          title="Business Owner"
          avi={require("./img/Mark.jpg")}
          quote="He works very hard and is very knowledgeable. He's a real life rockstar!"
        ></Card>

        <Card
          name="Steven Hong"
          title="Developer"
          avi={require("./img/Steven.jpg")}
          quote="Chris is professional, transparent and a team player."
        ></Card>

        <Card
          name="Amira Amin"
          title="Marketing Specialist"
          avi={require("./img/Amira.jpg")}
          quote="Chris is always a pleasure to work with and he has an eye for design."
        ></Card>

        <Card
          name="Kelly Paiten"
          title="UI/UX Designer"
          avi={require("./img/kelly.jpg")}
          quote="Chris is always willing to help and open to learning new skills."
        ></Card>
      </div>
    </div>
  );
}
