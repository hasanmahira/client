import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import UserInterests from './components/UserInterests';
import './App.css';
import logo from './logo.png';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <img src={logo} alt="IMBD" style={{ width: 100, display: 'block', margin: 'auto' }}></img>
          <UserInterests />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
