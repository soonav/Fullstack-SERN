import React from "react";
import { useState } from "react";
import "./Login.scss";
import { handleLoginApi } from "../../services/userServices";
import * as actions from "../../store/action";

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
    // setErrorMesage("");
    try {
      const dataRespone = await handleLoginApi(userName, password);
      console.log("dataRespone", dataRespone);
      dataRespone &&
        dataRespone.errorCode !== 0 &&
        setErrorMesage(dataRespone.message);
      dataRespone &&
        dataRespone.errorCode == 0 &&
        setErrorMesage("login success");
    } catch (e) {
      e.response && e.response.data && setErrorMesage(e.response.data.message);
    }
  };
  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-content">
          <div className="col-12  heading-login">Login</div>
          <div className="col-12" style={{ color: "red" }}>
            {errorMessage}
          </div>
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

const mapDispatch = (dispatch) => {
  return {
    // navigate: (patch) => dispatch(push(patch)),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default Login;
