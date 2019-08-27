import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { createBrowserHistory } from 'history';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import Header from './Header';
import Home from './views/Home';
import TheaterMovies from './views/TheaterMovies';
import FunctionView from './views/FunctionView';

import MovieInfo from './movies/MovieInfo';

const history = createBrowserHistory()

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: '/api/graphql'
});

const client = new ApolloClient({
  cache: cache,
  link: link,
});

const App = () => {
  return (
    <div>
      <ApolloProvider client={client}>
        <Router history={history}>
          <div>
            <Header></Header>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/theater-movies/:id" component={TheaterMovies} />
                <Route path="/function/:id" component={FunctionView} />
                {/* <Route path="/movies/:id" component={MovieInfo} /> */}
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    </div>);
}

export default App;
