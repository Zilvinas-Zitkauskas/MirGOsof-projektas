import React from "react";
import './Style.css';
import {UpdateProduct} from "./UpdateProduct";
import environment from '../environment'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";


export const ProductItem = props => {
  let navigate = useNavigate();
  const Delete = (product) => {
    console.log(product);
    fetch(`${environment.serverUrl}/deleteproduct`,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({id: product.id})
              })
              .then((value) => {
                if (!value.ok) {
                  return value.json()
                }
                navigate('/products');
              })
              .then(result => {
              })
  };
  <Route path="/UpdateProduct" component={UpdateProduct} />
  const { product } = props;
  return (
    <div className=" column is-half" id={product.id} name={product.name.toString().toLowerCase()}>
      <div className="box" >
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src={product.picture}
                alt={product.shortDesc}
              />
            </figure>
          </div>
          <div className="media-content">
            <b style={{ textTransform: "capitalize" }}>
              {product.name}{" "}
              <span className="tag is-primary2">${product.price}</span>
            </b>
            <div>{product.description}</div>
            {product.stock > 0 ? (
              <small>{product.stock + " Available"}</small>
            ) : (
              <small className="has-text-danger">Out Of Stock</small>
            )}
            <div className="is-clearfix">
            {props.state && props.state.email == "admin@admin.com" && (
              <button className="button is-small is-outlined2 is-primary2   is-pulled-right"
              onClick={() =>{
                Delete(product)
                window.location.reload(false)
              }
                
              }
              >
               Delete
               </button>
                  
                )}
            {props.state && props.state.email == "admin@admin.com" && (
              <Link
              to={{
                pathname: "/UpdateProduct",
                state: {
                  product: product,
                },
              }}
            >
              <button className="button is-small is-outlined2 is-primary   is-pulled-right"
                  >
                   Edit
                   </button>
            </Link>
                  
                )}
            
              <button
                className="button is-small is-outlined2 is-primary   is-pulled-right"
                onClick={() =>
                  props.addToCart({
                    id: product.name,
                    product,
                    amount: 1
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default ProductItem;