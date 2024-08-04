import React from "react";

const User = (props) =>{
    return(
        <div className="user-card">
            <h1>Name: {props.name}</h1>
            <h2>Desgination: Software Developer</h2>
            <h3>Location: Meerut</h3>
        </div>
    )
}

export default User;