import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  render() {

    return (
      <div className="about">
        <h1>About Us</h1>
        <h3>
          This is my second project in React that I am creating now to learn
          more about React
        </h3>
        <UserClass/>
      </div>
    );
  }
}

export default About;
