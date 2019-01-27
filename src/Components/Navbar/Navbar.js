import React from "react";

import "./Navbar.css";
import ChallengeLogo from "../../assets/course-catalog-logo.png";

const Navbar = () => {
  return (
    <div className={"navbar-component"}>
      <a href="/">
        <img src={ChallengeLogo} alt={"Challenge logo"} />
      </a>
    </div>
  );
};

export default Navbar;
