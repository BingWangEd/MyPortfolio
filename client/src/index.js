import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/index';
import { BrowserRouter as Router} from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

let graphqlUri = null

if(process.env.NODE_ENV === 'production') {
    graphqlUri = 'https://bingwangprofile.herokuapp.com/graphql';
    console.log(graphqlUri)
} else {
    graphqlUri = 'http://localhost:4000/graphql'
}

const client = new ApolloClient({
  uri: graphqlUri
})

export const initialState = {
  funMode: false
}

let store = null

if(process.env.NODE_ENV === 'production') {
    store = createStore(
      reducer,
      initialState
    );
} else {
    store = createStore(
      reducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}

// const store = createStore(
//   reducer,
//   initialState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router><App /></Router>
    </Provider>
  </ApolloProvider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
