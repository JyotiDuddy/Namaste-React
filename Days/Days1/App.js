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