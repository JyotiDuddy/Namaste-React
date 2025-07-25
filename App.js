<<<<<<< HEAD
// <div id="parent">
//     <div id="child">
//         <h1>Hello </h1>
//     </div>
// </div>

const heading = React.createElement(
  "div",
  { id: "parent" },[
     React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "React Child"),
    React.createElement("h1", {}, "react child 2"),
  ]),
   React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "React Child"),
    React.createElement("h1", {}, "react child 2"),
  ])
  ]
 
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
=======
import React from 'react';
import ReactDOM from 'react-dom/client';

const Parent= React.createElement("p",{},[
    React.createElement("h1",{}, "Namaste React"),
    React.createElement("h2",{}, "This is a React App"),
    React.createElement("h3",{}, "This is a child component")
]);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent);
>>>>>>> 196a0e5 (Added day folder with updated assignment and code)
