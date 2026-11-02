import "./Signin.css";
import "../components/Navbar";
function Signin() {
  return (
    <div className="container">
        <Navbar></Navbar>
      <div className="Signin-form">
        <h1>Sign In</h1>
        <div className="div-unm">
          <label htmlFor="usernm">Username :</label>
          <input type="text" name="unm" id="unm" placeholder="John Doe" />
        </div>
        <div className="div-pwd">
          <label htmlFor="pwd">Password :</label>
          <input type="password" name="pwd" id="ped" placeholder="John Doe" />
        </div>
      </div>
    </div>
  );
}
export default Signin;
