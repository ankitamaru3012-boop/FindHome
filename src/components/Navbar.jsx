import logo from "../assets/findhome-logo.jpg";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(){
  return(
  <nav className="navbar">
        <img src={logo} alt="FindHome logo" className="fh-logo"/>
        <div className="links">
            <Link to="/discover">Discover</Link>
            <Link to="/saved">Saved</Link>
            <Link to="/list-property">List Property</Link>

        </div>
        <Link to="/signin" className="btnsignin">
    Sign In
</Link> 
  </nav>
  );
}

export default Navbar;