import React from "react";
import Menu from "./Menu";
import style from "./MenuBar.module.css";
import Sticky from "react-stickynode";

const MenuBar = () => {
  return (
    <Sticky enabled={true} top={0}>
      <div className={style.menu__bar}>
        <Menu />
      </div>
    </Sticky>
  );
};

export default MenuBar;
