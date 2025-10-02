import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginAsync } from "../features/authSlice";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const token = useSelector((state) => {
    return state.auth.token;
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginAsync(user));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  //dispatch(loginAsync({ username: "donero", password: "ewedon" }));

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center vh align-items-center">
          <div className="col-md-5">
            <form className="form-login p-4">
              <h2 className="text-center">Login</h2>
              <div className="form-groub mt-2">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  id="name"
                  className="form-control"
                  value={user.username}
                  onChange={(e) => {
                    setUser({ ...user, username: e.target.value });
                  }}
                />
              </div>
              <div className="form-groub mt-2">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  value={user.password}
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                />
              </div>

              <button
                type="submit"
                className="py-2 btn my-3 w-100 fw-bold"
                onClick={handelLogin}
              >
                Sign in
              </button>

              <div className="forgot mt-2 text-center">
                <a href="forgot-password.html" className="text-muted">
                  Forgot password ?
                </a>
              </div>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "1rem",
                }}
              >
                You dont an have acount?<Link to="/register"> Sign up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
