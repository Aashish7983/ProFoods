import { LOGO_URL } from "../utils/config";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  // console.log(resList)

  const [button, setButton] = useState(true);

  function handleClick() {
    setButton(!button);
  }
  
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">  {onlineStatus ? "Online  🟢" : "Offline 🔴"} </li>
          <li className="px-4">
            {" "}
            <Link className="header-link" to="/">Home</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link className="header-link" to="/about">About Us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link className="header-link" to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
          <Link to="/grocery" className="px-4">
          Grocery </Link> </li>
          <button className="login-btn" onClick={handleClick}>
            {" "}
            {button ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
