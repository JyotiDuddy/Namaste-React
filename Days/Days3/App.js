
import React from 'react';
import ReactDOM from 'react-dom/client';

const Parent= React.createElement("p",{},[
    React.createElement("h1",{}, "Namaste React"),
    React.createElement("h2",{}, "This is a React App"),
    React.createElement("h3",{}, "This is a child component")
]);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent);
 