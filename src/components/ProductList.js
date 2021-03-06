import React from "react";
import { Formik, Form, Field } from 'formik';
import ProductItem from "./ProductItem";
import withContext from "../withContext";
import './Style.css';
import BootCarousel from "./BootCarousel.js";
import Hero from './Hero';
import $ from 'jquery';

const ProductList = props => {
  const { products } = props.context;

  return (
    <>
      <div className="hero is-primary2">
        <Hero title="Our Products" />
      </div>
      <br/>
      
      <div className="carousele" >
      <BootCarousel />
      </div>
      <br/>

      <div className="search">
        <Formik initialValues={{
          search: ''
        }} onSubmit={(values, { setSubmitting }) => {
          if (values.search == "") {
            $("#container").children().each((index, element) => {
              $('#' + element.id).show()

            });
          } else {
            $("#container").children().each((index, element) => {
              $('#' + element.id).hide()

            });
            $("#container").find("div[name*=" + values.search.toLowerCase() + "]").each((index, element) => {
              $('#' + element.id).show()
              console.log(element.id);

            });
          }


        }}>
          <Form>
          <div className="field search2">
                  <Field className="input" type="text" name="search" id="search" placeholder="Search here"/>
                  <button className="searchbutton" type="submit">Search</button>

                </div>

          </Form>
        </Formik>
        
      </div>

      <br/>

      <div className="container" >
        <div className="column columns is-multiline" id="container">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem
                product={product}
                key={index}
                addToCart={props.context.addToCart}
                state={props.context.state}
                editProduct={props.context.editProduct}
                setState={props.context.setState}
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