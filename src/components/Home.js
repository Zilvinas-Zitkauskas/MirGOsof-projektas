import React from "react";
import withContext from "../withContext";
import './Style.css';
import Hero from './Hero';
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="hero is-primary2">
        <Hero title="Welcome, to our store" />
      </div>
      <br />
      <NavLink to="/products">
        <button class="button-33" role="button">To store</button>
      </NavLink>

    </>
  );
};

export default withContext(HomePage);