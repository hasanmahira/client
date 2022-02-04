import React, { useState, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const Login_QUERY = gql`
query LoginQUERY {
    {
        login(email: $details.email, password: $details.password)
    }  
}
`;

export default function Login() {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  const Login = (details) => {
    console.log("details", details);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <fieldset>
          <div class="row">
            <div class="col-lg-3" />
            <div class="col-lg-5">
              <div class="page-header">
                <h1 id="forms">Sign In</h1>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" class="form-label mt-4">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(e) =>
                    setDetails({ ...details, email: e.target.value })
                  }
                  value={details.email}
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1" class="form-label mt-4">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(e) =>
                    setDetails({ ...details, password: e.target.value })
                  }
                  value={details.password}
                />
              </div>
            </div>
          </div>
        </fieldset>
        <div class="row">
          <div class="col-lg-4" />

          <div class="col-lg-2">
            <button type="submit" class="btn btn-primary">
              Sign In
            </button>
          </div>

          <div class="col-lg-2">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/signup">
                  <button type="submit" class="btn btn-primary">
                    Sign Up
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}
