import React from "react";
import MidPge from "../Images/Group 7.png";

const MidPage = () => {
  return (
    <div id="services" className="MidPage-Block">
      <div className="row">
        <div className="col-6  Text-container">
          <div className="text-area">
            <h3>
              <span style={{ color: "#EDBF65" }}>We offer</span>
            </h3>
            <h1 className="HeadingText-bottom ">
              Virtual <span style={{ color: "#EDBF65" }}>Office</span>
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
            <button className="button-Banner" type="submit" value="Submit">
              <div className="innerbutton">
                <div>Explore More</div>
                <div> &gt;&gt;</div>
              </div>
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
