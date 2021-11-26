import React from "react";
import image from "./../../../images/car-club.png";

const CarClub = () => {
  return (
    <div className=" mb-3">
      <div className="row">
        <div className="col-md-6 d-md-flex align-items-center p-5 pt-3 p-md-3">
          <img src={image} alt="" className="img-fluid" />
        </div>
        <div className="col-md-6 d-md-flex flex-column">
          <div>
            <p className={`white200 m-0 font_oswald fw-200 fs-25`}>
              The Largest Catalog Of Parts For Your American, European And JDM
              Cars{" "}
            </p>
            <h3 className="red m-0 mt_-6 font_oswald fs-30">
              For Enthusiasts, by Enthusiasts
            </h3>
            <p className="white200 m-0 font_oswald fs-12 lp-5">
              Keep Your Car On The Road With Genuine OEM Parts
            </p>
          </div>
          <div>
            <p className="light-gray mt-4 font_rubik fw-200 fs-13 lh-24 ">
              Keeping your car in peak form is essential to its continued
              performance, so stay on top of your service needs with the best
              Genuine American, European and JDM cars parts from the largest
              catalog anywhere, right here at SATuned™.
            </p>
            <p className="light-gray mt-4 font_rubik fw-200 fs-13 lh-24 ">
              Our expert staff works to provide you with the most expansive
              catalog of Genuine, Aftermarket, and Performance parts for your
              car. With our service kits, performance parts, and ever-growing
              list of partners, you can be sure to find what you need for your
              car at SATuned™.
            </p>
          </div>
          <div>
            {/* <p className="fs-3 text-muted signature">Dechssa</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarClub;
