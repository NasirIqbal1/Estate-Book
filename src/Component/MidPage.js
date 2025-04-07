import React from "react";
import MidPge from "../Images/Group 7.png";

const MidPage = () => {
  return (
    <div className="MidPage-Block">
      <div className="row">
        <div className="col-6  Text-container">
          <div className="text-area">
            <h3>
              <span style={{ color: "#EDBF65" }}>We offer</span>
            </h3>
            <h1>
              About<span style={{ color: "#EDBF65" }}>Us</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
            <button className="button-AboutUs" type="submit" value="Submit">
              Explore More &gt;&gt;
            </button>
          </div>
        </div>

        <div className="col-6 ">
          <img src={MidPge} alt="logo" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default MidPage;
