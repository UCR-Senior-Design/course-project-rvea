import { useState } from "react";
import "./Login.css";
import banner from "../images/ucr-banner.png";

function Login() {
  //State Hooks
  const [title, setTitle] = useState("Login");
  const [buttonName, setButtonName] = useState("Sign In");

  //Event Handlers
  function handleFormSubmit() {
    if (title != "Login") {
      handleReset();
    }
  }
  function handleRegister() {
    setTitle("Register");
    setButtonName("Sign Up");
  }
  function handleReset() {
    setTitle("Login");
    setButtonName("Sign In");
  }

  return (
    <>
      <div className="image">
        <a href="#" onClick={() => handleReset()}>
          <img src={banner} alt="ucr-banner"></img>
        </a>
      </div>
      <section>
        <div className="login-container">
          <div className="login-title">
            <h1>{title}</h1>
          </div>

          <div className="login-contents">
            <form>
              <div className="input-boxes">
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  required
                ></input>
              </div>
              <div className="input-boxes">
                <input
                  name="pwd"
                  type="password"
                  placeholder="Password"
                  required
                ></input>
              </div>
              <button
                className="login-submit"
                onSubmit={() => handleFormSubmit()}
              >
                {buttonName}
              </button>
              {title === "Login" ? (
                <p className="register">
                  Don&apos;t have an account?&nbsp;
                  <a href="#" onClick={() => handleRegister()}>
                    Register
                  </a>
                </p>
              ) : (
                <div className="user_registration">
                  <label for="user_type">Register as a&nbsp;</label>
                  <select name="user_type" required>
                    <option value='' disabled selected>---</option>
                    <option value="Student">Student</option>
                    <option value="Professor">Professor</option>
                  </select>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
