import React from "react";
import User from "./User";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
    componentDidMount() {
        console.log("UserClass component mounted");
    }

  render() {
    const { name } = this.props;

    return (
      <div className="user-card">
        <h2>Name:{name}</h2>

        <h3>location:Gurgaon</h3>
        <h3>Contact:jyotiduddy00@gmail.com</h3>
      </div>
    );
  }
}
export default UserClass;
