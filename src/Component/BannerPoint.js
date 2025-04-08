const BannerPoint = () => {
  return (
    <div className="Banner">
      <div>
        <div className="text-block">
          <h3>Just One Click &</h3>
          <h1 style={{ fontSize: "3rem" }}>
            <span style={{ color: "#EDBF65" }}>Get Your’s </span>Desired <br />
            Virtual <span style={{ color: "#EDBF65" }}>Office</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br />
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button className="button-Banner" type="submit" value="Submit">
            <div className="innerbutton">
              <div>Explore More</div>
              <div> &gt;&gt;</div>
            </div>
          </button>
        </div>
      </div>

      <div className="Form-Path">
        <div className="Form-Inner">
          <form action="/action_page.php">
            <legend>Find your virtual office</legend>

            <div className="BlocksForm-area">
              <div>
                <select id="country" name="country">
                  <option value="australia">Type</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
              </div>

              <div>
                <select id="country" name="country">
                  <option value="NewYork">City</option>
                  <option value="Tranto">Canada</option>
                  <option value="Sharja">Sharja</option>
                </select>
              </div>

              <div>
                <select id="country" name="country">
                  <option value="australia">Area</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
              </div>

              <div>
                <select id="country" name="country">
                  <option value="australia">Room</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
              </div>
            </div>

            <button className="button-sumbit" type="submit" value="Submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BannerPoint;
