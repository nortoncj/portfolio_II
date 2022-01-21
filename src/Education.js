import React from "react";
import "./education.css";
export default function Education() {
  return (
    <>
      <div className=" d-flex flex-column">
        <div className=" education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new">
            <span className="school">Florida International University</span>
            <span className="degree">BS in Electrical Engineering</span>
          </div>
          <div className="">
            <span className="year">2019</span>
          </div>
        </div>
      </div>
    </>
  );
}
