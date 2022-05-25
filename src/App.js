import React, { Component } from "react";
import { Routes, Route, Link, NavLink, BrowserRouter as Router } from "react-router-dom";

import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import Login from './components/Login';
import ProductList from './components/ProductList';
import Registration from './components/Registration';
import ForgotPassword from './components/ForgotPassword';
import ChangePassword from './components/ChangePassword';
import ChangeInformation from './components/ChangeInformation';
import ResetPassword from './components/ResetPassword';
import About from './components/About';
import MyAccount from './components/MyAccount';
import image from './logo.png'
import Support from "./components/Support";
import UpdateProduct from "./components/UpdateProduct"
import Home from "./components/Home"
import { useNavigate } from "react-router-dom";


import Context from "./Context";
import environment from './environment'

import axios from 'axios';
import jwt_decode from 'jwt-decode';
import FAQ from "./components/FAQ";
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";

import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Formik } from "formik";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      cart: {},
      products: [],
      files: [],
      editingproduct: null
    };
    this.routerRef = React.createRef();
  }

  componentDidMount() {
    let user = localStorage.getItem("user");
    user = user ? JSON.parse(user) : null;
    this.setState({ user });
  }
  login = async (email, password) => {
    const res = await axios.post(
      `${environment.serverUrl}/login`,
      { email, password },
    ).catch((res) => {
      return { status: 401, message: 'Unauthorized' }
    })

    if (res.status === 200) {
      toast("You have successfully logged in !");
      const user = res.data;
      this.setState({ user });
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  }

  forgotPassword = async (email) => {
    const res = await axios.post(
      `${environment.serverUrl}/forgotpassword`,
      { email },
    ).catch((res) => {
      return { status: 401, message: 'Unauthorized' }
    })

    if (res.status === 200) {
      const user = res.data;

      this.setState({ user });
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  }

  removeProduct = () => {
    const products = this.state.products.map(p => {
      if (true) {
        axios.put(
          `${environment.serverUrl}/products/${p.id}`,
          { ...p },
        )
      }
      return p;
    });

    this.setState({ products });
  };

  checkout = () => {
    const cart = this.state.cart;

    const products = this.state.products.map(p => {
      if (cart[p.name]) {
        p.stock = p.stock - cart[p.name].amount;

        axios.put(
          `${environment.serverUrl}/products/${p.id}`,
          { ...p },
        )
      }
      return p;
    });

    axios.post(`${environment.serverUrl}/cart/checkout`, { ...this.state.user });
    toast("Checkout successful!");
    this.setState({ products });
    this.clearCart();
  };

  logout = e => {
    const confirmBox = window.confirm(
      "Do you really want to logout?"
    )
    if (confirmBox === true) {
      toast("You have successfully logged out!");
      e.preventDefault();
      this.setState({ user: null });
      localStorage.removeItem("user");
      window.location.href = '/';
    }

  };

  async componentDidMount() {
    let user = localStorage.getItem("user");
    let cart = localStorage.getItem("cart");

    const products = await axios.get(`${environment.serverUrl}/products`);
    user = user ? JSON.parse(user) : null;
    cart = cart ? JSON.parse(cart) : {};

    this.setState({ user, products: products.data, cart });
  }

  addProduct = (product, callback) => {
    let products = this.state.products.slice();
    products.push(product);
    this.setState({ products }, () => callback && callback());
  };


  addToCart = cartItem => {
    let cart = this.state.cart;
    if (cart[cartItem.id]) {
      cart[cartItem.id].amount += cartItem.amount;
    } else {
      cart[cartItem.id] = cartItem;
    }
    if (cart[cartItem.id].amount > cart[cartItem.id].product.stock) {
      cart[cartItem.id].amount = cart[cartItem.id].product.stock;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  handleDelete = product => {
    const products = this.state.products.map(p => {
      if (product[p.name]) {
        axios
          .delete(`${environment.serverUrl}/products/${product.id}`)
          .then(() => {
            window.confirm(`Delete ${product.name}?`);
          });
      }
      return p;
    });
    this.setState({ products });
  };

removeFromCart = cartItemId => {

    let cart = this.state.cart;
    delete cart[cartItemId];
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };
  lessFromCart = cartItem => {
    let cart = this.state.cart;

    if (cart[cartItem.id].amount > 1) {
      cart[cartItem.id].amount -= cartItem.amount;
    } else {
      delete cart[cartItem.id];
      localStorage.setItem("cart", JSON.stringify(cart));
      this.setState({ cart });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  clearCart = () => {
    let cart = {};
    localStorage.removeItem("cart");
    this.setState({ cart });
  };

  getFiles = file=>{
    let files = this.state.files;
    files.push(file);
    document.getElementById("pic").src = file.base64;
    this.setState({ files })
  }
  editProduct = product=>{
    let editing = this.state.editingproduct;
    editing = product;
    this.setState({ editing })
    let navigate = useNavigate();
    navigate('/updateproduct');
  }

  render() {

    const successToast = () => {
      toast("You have successfully logged in !");
    };

    return (
      <Context.Provider
        value={{
          ...this.state,
          removeFromCart: this.removeFromCart,
          lessFromCart: this.lessFromCart,
          addToCart: this.addToCart,
          login: this.login,
          addProduct: this.addProduct,
          clearCart: this.clearCart,
          checkout: this.checkout,
          state: this.state.user,
          getFiles: this.getFiles,
          editProduct: this.editProduct,
          setState: this.setState,
        }}
      >
        <Router refs={this.routerRef}>
          <div className="App">
            <nav
              className="navbar container"
              role="navigation"
              aria-label="main navigation"
            >
              <>
                <ToastContainer />
              </>
              <div className="navbar-brand">
                <NavLink to="/products">
                  <img src={image} width="50" height="20"></img>
                </NavLink>
                <b className="navbar-item is-size-4 ">mirGOstore</b>
                <label
                  role="button"
                  className="navbar-burger burger"
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({ showMenu: !this.state.showMenu });
                  }}
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </label>
              </div>
              <div className={`navbar-menu ${this.state.showMenu ? "is-active" : ""
                }`}>
                <Link to="/" className="navbar-item">
                  Home
                </Link>
                <Link to="/products" className="navbar-item">
                  Products
                </Link>
                {this.state.user && this.state.user.email == "mirgostore@gmail.com" && (
                  <Link to="/add-product" className="navbar-item">
                    Add Product
                  </Link>
                )}
                <Link to="/cart" className="navbar-item">
                  Cart
                  <span
                    className="tag is-primary"
                    style={{ marginLeft: "5px" }}
                  >
                    {Object.keys(this.state.cart).length}
                  </span>
                </Link>
                {!this.state.user ? (
                  <>
                    <Link to="/login" className="navbar-item">
                      Login
                    </Link>
                    <Link to="/register" className="navbar-item">
                      Register
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/" onClick={this.logout} className="navbar-item">
                      Logout
                    </Link>

                    <Link to="/myaccount" className="navbar-item">
                      My account
                    </Link>
                  </>
                )}
                <Link to="/about" className="navbar-item">
                  About
                </Link>
                <Link to="/faq" className="navbar-item">
                  FAQ
                </Link>
                <Link to="/support" className="navbar-item">
                  Support
                </Link>

              </div>
            </nav>
            <Routes>
            <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Registration />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/add-product" element={<AddProduct />} />
              <Route exact path="/products" element={<ProductList />} />
              <Route exact path="/forgotpassword" element={<ForgotPassword />} />
              <Route exact path="/resetpassword/:id" element={<ResetPassword />} />
              <Route exact path="/changepassword" element={<ChangePassword />} />
              <Route exact path="/changeinformation" element={<ChangeInformation />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/myaccount" element={<MyAccount />} />
              <Route exact path="/faq" element={<FAQ />} />
              <Route exact path="/support" element={<Support />} />
              <Route exact path="/updateproduct" element={<UpdateProduct />} />
            </Routes>
          </div>
        </Router>
      </Context.Provider>
    );
  }
}