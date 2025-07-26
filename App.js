
import React from 'react';
import ReactDOM from 'react-dom/client';

//React.createElement=>Javascript Object=>HTMLElement as it is done by babel 

// Created a nested header element using
// 1. React.createElement
// const heading = React.createElement("div",{class:"title"},[
//     React.createElement("div",{id:"child1"},[
//         React.createElement("h1",{},"This is h1 tag"),
//         React.createElement("h2",{},"This is h2 tag")
//     ]),
//      React.createElement("div",{id:"child2"},[
//         React.createElement("h1",{},"This is h1 tag"),
//         React.createElement("h2",{},"This is h2 tag")
//     ])
// ])
// 2. Using Jsx

// const heading= React.createElement=(
    
//     <div className="title">
//         <div>
//             <h1>This is h1 tag</h1>
//             <h2>This is h2 tag</h2>
//         </div>
//         <div>
//             <h1>This is h1 tag</h1>
//             <h2>This is h2 tag</h2>
//     </div>
//     </div>
// )

// 3. Using a functional Component of the same heading using Jsx

// const Heading =()=>{
// return(
//  <div className="title">
//             <div className="subTitle">
//                 <h1>This is h1 tag</h1>
//                 <h2>This is h2 tag</h2>
//             </div>
//             <div className='subTitle'>
//                 <h1>This is h1 tag</h1>
//                 <h2>This is h2 tag</h2>
//             </div>
//         </div>
// )
// }
    
    //    4. Composition of Components
    // const Title=()=>{
    //     return(
    //         <div>
    //             <h2>JSX</h2>
    //         </div>
    //     )
    // }

    // const Heading=()=>{
    //     return(
    //         <div>
    //             <Title/>
    //         </div>
    //     )
    // }
    
//  5. Create a Header Component from scratch using Functional Components with JSX
 const Heading=()=>{
return(
    <div className="header">
         <div className="logo">Namaste React</div>
         <div className="searchBar"> Search</div>
         <div className="userIcon"> Icon</div>
    </div>
)
 }
//  6.{TitleComponent}vs {<TitleComponent/>} vs <TitleComponent></TitleComponent>
//  1.{TitelCompinent}->This is a variable to pass javascript object or variable
//  2.<TitleCompoenent/> -> This s is for passing a components as a variable
//  3.<TitleComponent></TitleComponent> -> This is for passing a component with children
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>)