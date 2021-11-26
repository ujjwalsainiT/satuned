import React, { useEffect, useState } from "react";
import { productPageProductData } from "./../../Data/ProductPageProductsData";
import ProductCard from "./../../commonComponent/ProductCard/ProductCard";
import ProductToolBar from "../ProductToolBar/ProductToolBar";
import axios from "axios";
import style from "../../HomePageComponent/Slider/Slider.module.css";
import SliderDropDown from "../../HomePageComponent/Slider/SliderDropDown";
import Sticky from "react-stickynode";

import TablePagination from "@material-ui/core/TablePagination";

const ProductsArea = () => {
  const [ProductCardArr, setProductCardArr] = useState([]);

  useEffect(() => {
    axios
      .get("https://arcane-river-72249.herokuapp.com/api/product/list")
      .then((res) => {
        setProductCardArr(res.data.data);
      });
  }, []);

  // for pagination hadler
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    window.scrollTo(0, 0);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="container">
      <div className="mt-3 mb-3">
        <Sticky enabled={true} top={0}>
          <div>
            <div className={`${style.exhaust_container} px-3`}>
              <SliderDropDown />
            </div>
          </div>
        </Sticky>
      </div>
      {/* <ProductToolBar /> */}
      <div className="row">
        {(rowsPerPage > 0
          ? ProductCardArr.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            )
          : ProductCardArr
        ).map((product, index) => (
          <div key={index} className="col-md-4 col-6 d-flex mb-4">
            <ProductCard product={product} productPage={true} />
          </div>
        ))}
      </div>
      <div className="Pagiantion_upper_border">
        <TablePagination
          true
          rowsPerPageOptions={false}
          component="div"
          count={ProductCardArr.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default ProductsArea;
