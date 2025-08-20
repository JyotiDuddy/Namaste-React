import React from "react";

// function User(props){
//     const[count] = useState(0);
//     const[count2] = useState(2);
//     const{name} = props;
//     return(
//         <div className="user-card">
//             <h2>Name:{name}</h2>
//             <h3>Count:{count}</h3>
//             <h3>Count2:{count2}</h3>
//             <h3>Location: Gurgaon</h3>
//             <h3>Contact:jyotiduddy00@gmail.com</h3>
//         </div>
//     )
// }
// export default User;
class User extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userInfo:{
                login:'Dummy',
                defaultLoaction:"dummy",
                avatar_url:null

            }
        }
        console.log(`ChildConstructor`)
    }
     async  componentDidMount() {
    const data = await fetch(`https://api.github.com/users/JyotiDuddy`);  
    const json = await  data.json();
    // console.log(json) ;
    this.setState({
        userInfo:json
    })
 } 
    render(){
        const {login,location,avatar_url} = this.state.userInfo;
        console.log(`ChidRender`)
        return(
            <div className="user-card">
                <img src={avatar_url} alt="avatar" />
           <h2>{login}</h2>
           <h3>Location:{location}</h3>
            </div>
        )
    }
    
}
export default User;