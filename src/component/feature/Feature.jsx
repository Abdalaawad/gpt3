import React from "react";
import "./Feature.css";

function Feature({ title, text }) {
  return (
    <div className="feature-gpt">
      <div className="feature-container-gpt">
        <h1>{title}</h1>
      </div>
      <div className="feature-box">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Feature;
