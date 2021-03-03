import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import App from './components/App';
// import reducers from './reducers';
import Root from './Root';

ReactDOM.render(
  // <Provider store={createStore(reducers, {})}>
  <Root>
    <App />
  </Root>
  // </Provider>
  , document.querySelector('#root'));