import React from "react";
import style from "./Footer.module.css";
import { leftFooterData, rightFooterData } from "./../Data/FooterData";
import LeftFooterCard from "./LeftFooterCard";
import RightFooterCard from "./RightFooterCard";

const TopFooter = () => {
  return (
    <div className={` ${style.top_footer}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <LeftFooterCard />
          </div>
          <div className="col-lg-6">
            <div className={`${style.res_border} row`}>
              {rightFooterData.map((footerData, index) => (
                <RightFooterCard key={index} footerData={footerData} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
