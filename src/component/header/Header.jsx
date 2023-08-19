import React from "react";
import "./Header.css";
import group from "../../assets/Group 81.png";
import illustrate from "../../assets/Illustration.png";

function Header() {
  return (
    <div className="header-gpt3" id="header">
      <div className="header-container-gpt3">
        <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="header-input-gpt3">
          <input type="text" placeholder="Your Email Address" />
          <button>get started</button>
        </div>
        <div className="header-image-gpt3">
          <img src={group} alt="group" />
          <h2>1,600 people requested access a visit in last 24 hours</h2>
        </div>
      </div>
      <div className="header-big-image-gpt3">
        <img src={illustrate} alt="illustrate" />
      </div>
    </div>
  );
}

export default Header;
