import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

export default function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dtvncdq",
        "template_nm6gkqs",
        form.current,
        "user_w6rlx1Bt4stlf7oqlcKGQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="form contact-form" ref={form} onSubmit={sendEmail}>
      <div>
        <label className="form-label" for="name" name="user_name">
          Name
        </label>
        <input
          className="form-control"
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
          required
        />
      </div>
      <div>
        <label className="form-label" for="email">
          Email
        </label>
        <input
          className="form-control"
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          required
        />
      </div>
      <div>
        <label className="form-label" for="subject">
          Subject
        </label>
        <input
          className="form-control"
          id="subject"
          name="subject"
          type="subject"
          required
        />
      </div>
      <div>
        <label className="form-label" for="message">
          Message
        </label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          value={message}
          onChange={(e) => {
            setmessage(e.target.value);
          }}
          required
        ></textarea>
      </div>
      <div>
        <button className="button" type="submit" value="Send">
          Submit
        </button>
      </div>
    </form>
  );
}
