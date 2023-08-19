import React from "react";
import Feature from "../feature/Feature";
import "./Whatgpt.css";

function Whatgpt() {
  return (
    <div className="whatgpt-gpt3">
      <div className="whatgpt-title-gpt3">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="whatgpt-text-gpt3">
        <h1>The possibilities are beyond your</h1>
        <h2>Explore The Library</h2>
      </div>
      <div className="whatgpt-feature-gpt3">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
}

export default Whatgpt;
