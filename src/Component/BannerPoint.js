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
        </div>
      </div>

      <div className="Form-Path">
        <div className="Form-Inner">
          <form action="/action_page.php">
            <div>
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
            </div>

            <div>
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
            </div>

            <div>
              <label htmlFor="country">Country</label>
              <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
            </div>

            <button className="button-sumbit" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BannerPoint;
