import React from "react";
import ProductItem from "./ProductItem";
import withContext from "../withContext";
import './Style.css';
import BootCarousel from "./BootCarousel.js";


const ProductList = props => {
  const { products } = props.context;

  return (
    <>
      <div className="hero is-primary2">
        <div className="hero-body container">
          <h4 className="title">Our Products</h4>
        </div>
      </div>
      <br/>
      <div className="carousele" >
      <BootCarousel />
      </div>
      <div className="container">
        <div className="column columns is-multiline">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem
                product={product}
                key={index}
                addToCart={props.context.addToCart}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                No products found!
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default withContext(ProductList);