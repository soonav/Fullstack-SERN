import React from "react";
import { useState } from "react";
import "./Login.scss";
import { handleLoginApi } from "../../services/userServices";
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMesage] = useState("");

  const changeUserName = (e) => {
    setUserName(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    await handleLoginApi(userName, password);
  };
  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-content">
          <div className="col-12  heading-login">Login</div>
          <div className="col-12">{errorMessage}</div>
          <div className="col-12 form-group mb-3 ">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your username"
              value={userName}
              onChange={changeUserName}
            />
          </div>
          <div className="col-12 form-group mb-3 ">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              onChange={changePassword}
              value={password}
            />
          </div>
          <div className="col-12 mb-3">
            <button type="button" className="btn-hover" onClick={handleLogin}>
              Login
            </button>
          </div>
          <div className="col-12">
            <span>Forgot password</span>
          </div>
          <div className="col-12">Or login with:</div>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8 ">
              <div className="container-fb-gg">
                <div className="google">Google</div>
                <div className="facebook">Facebook</div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
