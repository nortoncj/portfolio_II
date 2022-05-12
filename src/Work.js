import React from "react";
import "./work.css";
export default function Work() {
  return (
    <>
      <div className="work-new">
        <div className=" d-flex flex-column">
          <span className="company">Nursery of Kickz</span>
          <span className="years">2019-present</span>
        </div>
        <div className="d-flex flex-column">
          <span className="position">Full Stack Developer</span>
          <span className="desc">
            <div>
              <ul>
                <li>
                  Created a responsive and dynamic Ecommerce website using the
                  WAMP
                </li>
                <li>Setup scalable transactions through Paypal API</li>
              </ul>
            </div>
          </span>
        </div>
      </div>
      <div className="work-new">
        <div className=" d-flex flex-column">
          <span className="company">Ultimate Wound Solutions</span>
          <span className="years">2019-2020</span>
        </div>
        <div className="d-flex flex-column">
          <span className="position">Front End Consultant Developer</span>
          <span className="desc">
            <div>
              <ul>
                <li>Provided various Front end edits to website</li>
                <li>Provided artwork and logo designs for marketing</li>
              </ul>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
