import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
// import {} from "../../assets";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src="" alt="meals" />
      </div>
    </>
  );
};

export default Header;
