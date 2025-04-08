import React from "react";
import OfficeImage from "../Images/Group 9.png";

const Officepage = () => {
  return (
    <div id="contact" className="Background-area">
      <div className="Office-textarea">
        <div className="office-paragraph">
          <h1 className="HeadingText-Office ">
            UAE <span style={{ color: "#EDBF65" }}>Offices</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </p>
        </div>

        <div className="List-area">
          <ul className="custom-list">
            <li>
              <a href="#home">Abu Dhabi</a>
            </li>
            <li>
              <a href="#news">Dubai</a>
            </li>
            <li>
              <a href="#contact">Sharjah</a>
            </li>
            <li>
              <a href="#about">Ajman</a>
            </li>
            <li>
              <a href="#about">Umm Al-Quwain</a>
            </li>
            <li>
              <a href="#about">Fujairah</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div >
        <img src={OfficeImage} alt="logo" width={500} height={300} />
      </div> */}
    </div>
  );
};

export default Officepage;
