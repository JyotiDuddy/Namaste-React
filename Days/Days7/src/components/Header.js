import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState(`Login`);
  console.log(`Header render`); //  if no depeendency array that means useEffect is called on every render.
  // if the dependency array is empty , useeffect is called on initial render, just once when components render first time.
  // if the dependency array is (btnName), called everytime btnName is updated.

  // useEffect(() => {
  //   console.log(`useEffect`);
  // }, [btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact"></Link>Contact Us
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
