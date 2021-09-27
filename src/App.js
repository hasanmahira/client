import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
// import UserInterests from './components/UserInterests';
import './App.css';
// import logo from './logo.png';
import Movies from './components/Movies';
// import MovieGenres from './components/MovieGenres';
import NavBar from './components/NavBar';
import { HashRouter as Router, Route } from 'react-router-dom'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className='router-div'>
          <ApolloProvider client={client}>
            <NavBar />
            <div className="container">
            <Route exact path='/' component={Movies} />
              {/* <UserInterests /> */}
              {/* <Movies /> */}
              {/* <MovieGenres /> */}
            </div>
          </ApolloProvider>
        </div>
      </Router>
    );
  }
}

export default App;
