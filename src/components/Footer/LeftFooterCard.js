import React from "react";
import { MdLocationOn, MdPhoneIphone, MdEmail } from "react-icons/md";
import style from "./Footer.module.css";

const LeftFooterCard = ({ data }) => {
  return (
    <>
      {/* <h4 className={`text-white text-uppercase  ${style.title}`}>{null}</h4> */}
      <p className={`${style.description} white300`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi pariatur
        nesciunt accusamus perferendis{" "}
      </p>

      <div className={`${style.content} text-white d-flex mb-3 `}>
        <span>
          {" "}
          <MdLocationOn className="red me-2 fs-21 red900" />:
        </span>
        <span className="ml-2">
          Sushila Autotechnik,sushila Commertial Space,
          <br />
          Raipada, Virar East, Palghar, Maharashtra, <br />
          India 401303
        </span>
      </div>

      <div className={`${style.content} text-white d-flex  mb-3 `}>
        <span>
          {" "}
          <MdPhoneIphone className="red me-2 fs-21 red900" />:
        </span>
        <span className="ml-2">+91-9764516224</span>
      </div>

      <div
        className={`${style.content} text-white d-flex align-items-center mb-3 `}
      >
        <span>
          {" "}
          <MdEmail className="red me-2 fs-21 red900" />:
        </span>
        <span className="ml-2">info@sushilaautotechnik.in</span>
      </div>
    </>
  );
};

export default LeftFooterCard;
