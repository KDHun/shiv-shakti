import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import Logo from "../../Image/ShivShaktiEnterpriseLogo.png";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={Logo} alt="img" />
      </div>
      <div className={classes.navLinks}>
        <Link to="/" className={classes.headerLink}>
          HOME
        </Link>
        <Link to="/generatepdf" className={classes.headerLink}>
          GENERATE PDF
        </Link>
        <Link to="/viewdata" className={classes.headerLink}>
          VIEW DATA
        </Link>
      </div>
    </header>
  );
};

export default Header;