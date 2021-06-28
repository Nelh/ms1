import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './Styles/App.scss'

import HomePage from './Pages/HomePage';

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/" component={HomePage} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
