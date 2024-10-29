import React from "react";
import Navbar from "../Components/Navbar";
import Product from "../Components/Product";

const Products = () => {
  return (
    <div className="app-container" style={{display: "flex"}}>
      <Navbar />
      <Product/>
    </div>
  );
};

export default Products;
