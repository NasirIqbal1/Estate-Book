import TableImage from "../Images/Egale2.png";

const AboutUs = () => {
  return (
    <div className="Table-Block">
      <div className="row">
        <div className="col-6">
          <img src={TableImage} alt="logo" width={300} height={300} />
        </div>

        <div className="col-6 Text-container">
          <div className="container">
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

        {/* <div className="col-3">samlpe the table</div>

      <div className="col-3">samlpe the table</div> */}
      </div>
    </div>
  );
};

export default AboutUs;
