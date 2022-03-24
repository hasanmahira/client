import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
// import UserInterests from './components/UserInterests';
import "./App.css";
// import logo from './logo.png';
import Movies from "./components/Movies";
// import MovieGenres from './components/MovieGenres';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Stars from "./components/Stars";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const client = new ApolloClient({
  uri: "https://movie-fan-api.herokuapp.com/graphql",
});

class App extends Component {
  render() {
    return (
      <Router>
        <ApolloProvider client={client}>
          <Route path="/" component={App}>
            <NavBar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Movies} />
                <Route exact path="/movies" component={Movies} />
                <Route exact path="/stars" component={Stars} />
              </Switch>
            </div>
          </Route>
          <div className="container">
            <Route path="/login" component={Login} />
          </div>
          <div className="container">
          <Route path="/signup" component={SignUp} />
          </div>

        </ApolloProvider>
      </Router>
    );
  }
}

export default App;
