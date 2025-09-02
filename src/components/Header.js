import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useContext } from "react";

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
 

 const {loggedInUser}= useContext(userContext)
   return (
    <div className="flex justfy-between items-center bg-pink-100  shadow-lg sm:bg-yellow-300">
      <div className="">


        <img className="h-40 w-40" src={LOGO_URL} />
      </div>
      <div className="flex">
         
        <ul className="flex justify-center items-center space-x-4">
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
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
