import React, { useEffect, useState } from "react";
import ProductCard from "./../../commonComponent/ProductCard/ProductCard";
import "./ProductPageLayout.css";
import axios from "axios";
//pagination
import { TablePagination, Card } from "@material-ui/core";

const ProductPageLayout = () => {
  const [ProductCardArr, setProductCardArr] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
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
    <div className="layout">
      <div className="container">
        <div>
          <Card className="Card_shadow p-3 mb-3">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-6 d-flex">
                  <select class="form-control">
                    <option>Select Brand</option>
                    <option>No data</option>
                  </select>
                </div>
                <div className="col-md-3 col-6 d-flex ">
                  <select class="form-control">
                    <option>Select series</option>
                    <option>No data</option>
                  </select>
                </div>
                <div className="col-md-3 col-6 d-flex ">
                  <select class="form-control">
                    <option>Select Chassis</option>
                    <option>No data</option>
                  </select>
                </div>
                <div className="col-md-3 col-6 d-flex ">
                  <select class="form-control">
                    <option>Select Model</option>
                    <option>No data</option>
                  </select>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="row p-2">
          
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
    </div>
  );
};

export default ProductPageLayout;
