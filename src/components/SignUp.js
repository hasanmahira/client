import React, { useState, Fragment } from "react";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";

const SignUp_QUERY = gql`
  mutation createUser($user: UserInputType!) {
    createUser(user: $user) {
      email
    }
  }
`;
// const Login_QUERY = gql`{
//     "user": {
//   "user_name": "String!",
//   "first_name": "String!",
//   "surname": "String!",
//   "email": "String!",
//   "password_digest": "String!",
//   "yob": "String!"
//     }
//   }
//   `;

export default function SignUp() {
  const [state, setstate] = useState({
    user_name: "",
    first_name: "",
    surname: "",
    email: "",
    password_digest: "",
    yob: "",
  });

  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     Login(state);
  //   };

  //   const Login = (state) => {
  //     console.log("state", state);
  //   };

  return (
    <div>
      <form>
        <fieldset>
          <div class="row">
            <div class="col-lg-3" />
            <div class="col-lg-5">
              <div class="page-header">
                <h1 id="forms">Sign Up</h1>
              </div>
              {/* user_name */}
              <div class="form-group">
                <label for="user_name" class="form-label mt-4">
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="user_name"
                  placeholder="Enter Username"
                  onChange={(e) =>
                    setstate({ ...state, user_name: e.target.value })
                  }
                  value={state.user_name}
                />
              </div>
              {/* first_name */}
              <div class="form-group">
                <label for="first_name" class="form-label mt-4">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="first_name"
                  placeholder="Enter First Name"
                  onChange={(e) =>
                    setstate({ ...state, first_name: e.target.value })
                  }
                  value={state.first_name}
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              {/* surname */}
              <div class="form-group">
                <label for="surname" class="form-label mt-4">
                  Surname
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="surname"
                  placeholder="Enter Surname"
                  onChange={(e) =>
                    setstate({ ...state, surname: e.target.value })
                  }
                  value={state.surname}
                />
              </div>
              {/* yob */}
              <div class="form-group">
                <label for="yob" class="form-label mt-4">
                  Surname
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="yob"
                  placeholder="Enter Year of Birth"
                  onChange={(e) => setstate({ ...state, yob: e.target.value })}
                  value={state.yob}
                />
              </div>
              {/* email */}
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
                    setstate({ ...state, email: e.target.value })
                  }
                  value={state.email}
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              {/* password */}
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
                    setstate({ ...state, password: e.target.value })
                  }
                  value={state.password}
                />
              </div>
            </div>
          </div>
        </fieldset>
        <div class="row">
          <div class="col-lg-4" />
          <div class="col-lg-2">
            <Mutation
              mutation={SignUp_QUERY}
              refetchQueries={[{ query: SignUp_QUERY }]}
            >
              {(mutation) => (
                <button
                  onClick={() => mutation({ variables: { input: this.state } })}
                >
                  Sign In
                </button>
              )}
            </Mutation>

            {/* <button type="submit" class="btn btn-primary">
              Sign In
            </button> */}
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
