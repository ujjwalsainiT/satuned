import React, { useState, useEffect } from "react";
import ProductCard from "../../commonComponent/ProductCard/ProductCard";
import style from "./OurProduct.module.css";
//  import { productPageProductData } from './../../Data/ProductPageProductsData';
import axios from "axios";
import OwlCarousel from "react-owl-carousel3";
const categorys = ["Wheels", "Sounds", "Featured", "Home page"];

const options = {
  loop: true,
  nav: false,
  autoplay: true,
  autoplayHoverPause: true,
  mouseDrag: true,
  margin: 30,
  center: false,
  dots: false,
  smartSpeed: 1500,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
};

const OurProduct = () => {
  const [ourProducts, setourProducts] = useState([]);
  const [categorytype, setcategorytype] = useState("Wheels");

  const handlecategory = (data) => {
    setcategorytype(data);
  };

  useEffect(() => {
    axios
      .get("https://arcane-river-72249.herokuapp.com/api/product/list")
      .then((res) => {
        setourProducts(res.data.data);
        console.log("Card dataproduct:::", res);
      });
  }, []);

  return (
    <div className="container">
      <div className="d-flex align-items-center flex-wrap justify-content-center">
        {categorys.map((category, index) => (
          <p
            key={index}
            className={`mx-2 white300  ${
              category === categorytype
                ? `White_text ${style.category}`
                : `${style.category}`
            } `}
            onClick={() => handlecategory(category)}
          >
            {category}
          </p>
        ))}
      </div>

      {categorytype === "Wheels" && (
        <div className="row mt-5">
          <OwlCarousel
            className="client-wrap owl-carousel owl-theme"
            {...options}
          >
            {ourProducts.map((product, index) => (
              <div
                key={index}
                className={`col-lg-12 mb-5 mb-lg-0 d-flex col-sm-6`}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </OwlCarousel>
        </div>
      )}

      {categorytype === "Sounds" && (
        <div className="row mt-5">
          <div className={`col-lg-3 mb-5 mb-lg-0 d-flex col-sm-6 White_text`}>
            Sounds Product
          </div>
        </div>
      )}

      {categorytype === "Featured" && (
        <div className="row mt-5">
          <div className={`col-lg-3 mb-5 mb-lg-0 d-flex col-sm-6 White_text`}>
            Featured product
          </div>
        </div>
      )}
      {categorytype === "Home page" && (
        <div className="row mt-5">
          <div className={`col-lg-3 mb-5 mb-lg-0 d-flex col-sm-6 White_text`}>
            home page
          </div>
        </div>
      )}
    </div>
  );
};

export default OurProduct;
