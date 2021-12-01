import React from "react";
import style from "./ProductDetails.module.css";
import audioImg from "./../../images/audio_img.png";
import { FaPlay, FaPause } from "react-icons/fa";

const AudioView = () => {
  return (
    <div className={` ${style.audio_section}`}>
      <div className="container">
        <div className={style.audio_wrapper}>
          {/* <div className={`col-5 col-md-4 col-lg-3  ${style.audio_img_container}`}>
            <img src={audioImg} className="img-fluid" alt="" />
          </div> */}
          <div className={`mt-3 col-md-7 ${style.audio_control}`}>
            <div className="row">
              <div className="col-lg-5 mt-1 mr-3 ml-1">
                <div className="mr-3 px-2">
                  <audio controls>
                    <source src="horse.ogg" type="audio/ogg" />
                  </audio>

                  <p className={style.audio_title}>
                    Stock exhaust; BMW 340i (F30)
                  </p>
                </div>
              </div>
              <div className="col-lg-5 mt-1 ml-2">
                <div className=" px-2">
                  <audio controls>
                    <source src="horse.ogg" type="audio/ogg" />
                  </audio>

                  <p className={style.audio_title}>
                    Stock exhaust; BMW 340i (F30)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioView;
