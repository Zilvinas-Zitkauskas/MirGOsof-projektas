import React from "react";
import withContext from "../withContext";
import './Style.css';
import Hero from './Hero';
import { Link, NavLink } from "react-router-dom";
import BootCarouselHome from "./BootCarouselHome.js";

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

const HomePage = props => {
  

  return (
    <>
      <div className="hero is-primary2">
        <Hero title="Welcome, to our store"/>
      </div>
      <br></br>
      <div className="carousele" >
      <BootCarouselHome />
      </div>
      <NavLink to="/products">
      <button class="button-33" role="button">To store</button>
      </NavLink>
      <NavLink to="/about">
      <button class="button-34" role="button">About us</button>
      </NavLink>
      
    </>
  );
};

export default withContext(HomePage);