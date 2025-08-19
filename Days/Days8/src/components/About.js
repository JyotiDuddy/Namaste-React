import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// const About=()=>{
//     return(
//         <div>
//             <h2>About</h2>
//             {/* {<User name={"J} */}
//             <UserClass name={"jyoti duddy"}/>
//             <UserClass name={"Second"}/>
//         </div>
//     )
// }
// export default About;

class About extends React.Component{
    constructor(props){
        super(props);
        console.log(`Paraent Constuctor`)
    }
    componentDidMount(){
        console.log(`ParentDidMount`)
    }
    render(){
        console.log(`parent render`)
        return(
            <div>
                <h1>About</h1>
                <User/>
                <UserClass name={"Jyoti Duddy"}/>
                <UserClass name={"Second User"}/>
            </div>
        )
    }

}
export default About;