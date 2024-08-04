import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo: {
            login:"Dummy",
            // location: "Default"
        }
    };
  }

 async componentDidMount() {
    const data = await fetch(" https://api.github.com/users/Aashish7983");
    const json = await data.json();
    
    this.setState({
        userInfo: json,
    })

  console.log("Github",json);
  }

  render() {

    const {login, avatar_url} = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}
        alt="logo"
        />
        <h1>Name: {login}</h1>
      </div>
    );
  }
}

export default UserClass;
