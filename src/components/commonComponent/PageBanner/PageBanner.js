import React from "react";
import style from "./PageBanner.module.css";
import { Breadcrumb } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Menu from "../../MenuBar/Menu";

const PageBanner = ({ title, menu, dontShowTitle }) => {
  const history = useHistory();
  return (
    <section className={style.section}>
      {menu && (
        
        <div className={style.product_page_menu_conatiner}>
          <Menu bg={"white"} />
        </div>
      )}
      <div className="container">
        <h2 className={dontShowTitle ? "invisible" : "visible"}>{title}</h2>
        <div className={`text-white text-center ${style.breadcrumb_wrapper}`}>
          <div className="pagebanner">
            <Breadcrumb>
              <Breadcrumb.Item onClick={() => history.push("/")} className="home_link_color">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                {/* Product */}
                {title}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
