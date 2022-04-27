import React from "react";
import ProductItem from "./ProductItem";
import withContext from "../withContext";
import './Style.css';
import BootCarousel from "./BootCarousel.js";
import Hero from './Hero';

fetch("http://localhost:3001/products")
.then(response => {
  console.log(response);
})
.then(results => {
  console.log(results);
})
.then(err => {
  console.log(err);
});

const ProductList = props => {
  const { products } = props.context;

  return (
    <>
      <div className="hero is-primary2">
        <Hero title="Our Products"/>
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