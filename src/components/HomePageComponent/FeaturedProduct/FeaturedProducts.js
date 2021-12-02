import React from "react";
import { FeaturedProducts } from "../../Data/FearuredProductData";
import FeaturedProduct from "./FeaturedProduct";

const FearuredProducts = () => {
  return (
    <div className="mt-0 pt-3 mt-md-5 ">
      {/* <SectionTitle
        text={"fetaured products"}
        description={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, recusandae?"
        }
      /> */}
      <div className="text-uppercase m-0 font_oswald text-white lp-2 text-center home_Page_heading">fetaured products</div>
      <FeaturedProduct data={FeaturedProducts} />
      <FeaturedProduct data={FeaturedProducts} />
    </div>
  );
};

export default FearuredProducts;
