import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setmenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <Link to="/" style={{ textDecoration: "none" }}>
          <li
            onClick={() => {
              setmenu("shop");
            }}
          >
            Shop
            {menu === "shop" && <hr />}
          </li>
        </Link>
        <Link to="men" style={{ textDecoration: "none" }}>
          <li
            onClick={() => {
              setmenu("men");
            }}
          >
            Men {menu === "men" && <hr />}
          </li>
        </Link>
        <Link to="women" style={{ textDecoration: "none" }}>
          <li
            onClick={() => {
              setmenu("women");
            }}
          >
            Women {menu === "women" && <hr />}
          </li>
        </Link>
        <Link to="kids" style={{ textDecoration: "none" }}>
          <li
            onClick={() => {
              setmenu("kids");
            }}
          >
            Kids {menu === "kids" && <hr />}
          </li>
        </Link>
      </ul>
      <div className="nav-login-cart">
        <Link to="login">
          <button>Login</button>
        </Link>
        <Link to="cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
