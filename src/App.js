import React, { lazy,Suspense,useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider,Outlet, useSearchParams } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu"
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import userContext from "./utils/userContext";

const AppLayout = () => {
  // authentication 
  const[userInfo,setUserInfo] = useState();

  useEffect(()=>{
    //  Make an api call and send username and passowrd
    const data={
      name:"Akshay"
    }
    setUserInfo(data.name)
  },[])
  return (
    <userContext.Provider value={{loggedInUser:userInfo}}>
<div className="app">
      <Header />
       <Outlet/>
    </div>
    // </userContext.Provider>
    
  );
};

const Grocery=lazy(()=>import ("./components/Grocery"))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {path:"/", element:<Body/>},
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {path: "/grocery", element:<Suspense fallabck ={<h1>Loading</h1>}><Grocery/> </Suspense> },
      {path:"/restaurant/:resId" , element:<RestaurantMenu/>}
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
