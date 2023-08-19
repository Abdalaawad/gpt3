import React from "react";
import "./Articles.css";

function Articles({ imageurl, date, text }) {
  return (
    <div className="articles-gpt3">
      <div className="articles-images-gpt3">
        <img src={imageurl} alt="..." />
      </div>
      <div className="articles-content-gp3">
        <div>
          <h3>{date}</h3>
          <h1>{text}</h1>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
}

export default Articles;
