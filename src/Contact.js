import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  return (
    <form class="form contact-form" action="norton0077@live.com" method="POST">
      <div>
        <label class="form-label" for="name">
          Name
        </label>
        <input
          class="form-control"
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
        <label class="form-label" for="email">
          Email
        </label>
        <input
          class="form-control"
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
        <label class="form-label" for="subject">
          Subject
        </label>
        <input
          class="form-control"
          id="subject"
          name="subject"
          type="subject"
          required
        />
      </div>
      <div>
        <label class="form-label" for="message">
          Message
        </label>
        <textarea
          class="form-control"
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
        <button class="button" type="submit">
          Submit
        </button>
        <button class="button" type="reset">
          Clear
        </button>
      </div>
    </form>
  );
}
