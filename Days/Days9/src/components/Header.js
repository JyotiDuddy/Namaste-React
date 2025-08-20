import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState(`Login`);
  console.log(`Header render`); //  if no depeendency array that means useEffect is called on every render.
  // if the dependency array is empty , useeffect is called on initial render, just once when components render first time.
  // if the dependency array is (btnName), called everytime btnName is updated.

  // useEffect(() => {
  //   console.log(`useEffect`);
  // }, [btnName]);
 const{onlineStatus} = useOnlineStatus();
 console.log(onlineStatus);
 
   return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>OnlineStatus:{onlineStatus===true? "✅":"🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li><Link to="/grocery">Grocery</Link></li>
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
