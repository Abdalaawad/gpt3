import React from "react";
import "./Navbar.css";
import logo from "../../assets/GPT-3.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

function Navbar() {
  const [nav, setnav] = useState(false);
  const handleopen = () => {
    setnav(true);
  };
  const handleclose = () => {
    setnav(false);
  };
  return (
    <div className="navbar-gpt3">
      <div className="navbar-container-gp3">
        <div className="navbar-image-gp3">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-list-gp3">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wpt3">What is gpt3</a>
          </p>
          <p>
            <a href="#openai">open al</a>
          </p>
          <p>
            <a href="#case">casestudio</a>
          </p>
          <p>
            <a href="#library">Home</a>
          </p>
        </div>
        <div className="navbar-input-gp3">
          <p>sign up</p>
          <button type="submit">sign up</button>
        </div>
        <div className="app-nav-burg">
          <RxHamburgerMenu onClick={handleopen} style={{ fontSize: "30px" }} />
          {nav && (
            <div className="app-nav-close">
              <div className="navbar-list-gp3-close">
                <AiOutlineClose onClick={handleclose} className="close-nav" />
                <p>
                  <a href="#home">Home</a>
                </p>
                <p>
                  <a href="#wpt3">What is gpt3</a>
                </p>
                <p>
                  <a href="#openai">open al</a>
                </p>
                <p>
                  <a href="#case">casestudio</a>
                </p>
                <p>
                  <a href="#library">Home</a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
