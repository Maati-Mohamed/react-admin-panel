import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center vh align-items-center">
          <div className="col-md-5">
            <form className="form-login p-4">
              <h2 className="text-center">Login</h2>
              <div className="form-groub mt-2">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                />
              </div>
              <div className="form-groub mt-2">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                />
              </div>

              <button type="submit" className="py-2 btn my-3 w-100 fw-bold">
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
