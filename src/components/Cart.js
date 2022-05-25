import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import withContext from "../withContext";
import CartItem from "./CartItem";
import Hero from "./Hero"
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";

const Cart = props => {
  let navigate = useNavigate();

  const onCheckout = () => {
    if (!props.context.user) {
      navigate("/login");
      toast("You have to login!");
      return;
    }
    props.context.checkout();
  }

  const { cart } = props.context;
  const cartKeys = Object.keys(cart || {});
  return (
    <>
      <Hero title="My Cart" />
      <br />
      <div className="container">
        {cartKeys.length ? (
          <div className="column columns is-multiline">
            {cartKeys.map(key => (
              <CartItem
                cartKey={key}
                key={key}
                cartItem={cart[key]}
                removeFromCart={props.context.removeFromCart}
                addToCart={props.context.addToCart}
                lessFromCart={props.context.lessFromCart}
              />
            ))}
            <div className="column is-12 is-clearfix">
              <br />
              <div className="is-pulled-right">
                <button
                  onClick={props.context.clearCart}
                  className="button is-warning "
                >
                  Clear cart
                </button>{" "}
                <button
                  className="button is-success"
                  onClick={onCheckout}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="column">
            <div className="title has-text-grey-light">No item in cart!</div>
          </div>
        )}
      </div>
    </>
  );
};

export default withContext(Cart);