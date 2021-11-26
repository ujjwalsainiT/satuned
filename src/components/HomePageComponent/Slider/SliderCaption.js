import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import style from "./Slider.module.css";
import logo from "./../../../images/sliderLogo.png";
import SliderDropDown from "./SliderDropDown";
import { useHistory } from "react-router";

const SliderCaption = () => {
  const history = useHistory();

  return (
    <>
      <div className={`mb-3 ${style.content_container}`}>
        <img src={logo} alt="" className={style.slider_logo} />
        <h2 className={`text-uppercase mb-0 text-white`}>
          lamborghini aventador
        </h2>
        <p className={`text-uppercase text-white m-0 ${style.small}`}>
          Lims Suma klakn car
        </p>
        <p className="px-4 text-white">
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </p>
      </div>
      <div>
        <div className="mb-4 text-center">
          <p className={style.btn}>
            <span
              className="text-white"
              onClick={() => history.push("/interior-products")}
            >
              Shop Now
            </span>{" "}
            <MdKeyboardArrowRight />
          </p>
        </div>
        <div>
          <div className={`${style.exhaust_container} px-3`}>
            <SliderDropDown />
          </div>
        </div>
        ;
      </div>
    </>
  );
};

export default SliderCaption;
