const NavBanner = () => {
  return (
    <nav className="Nav-bar">
      <div>
        {/* <div className="Logo">
       
      </div> */}
        <div className="Nav-items">
          <img className="Logo" src="Logo.png" alt="logo" />
          <ul>
            <li>
              <a class="active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <div className="button">
              <button class="btn1">Login</button>
              <button class="btn2 ">Register</button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBanner;
