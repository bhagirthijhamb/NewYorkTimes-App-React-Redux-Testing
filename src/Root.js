import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

// functional React component with no name
// Root component is responsible for setting up the redux store and placing the Provider tag and then simply rendering any children that is provided
// anytime we create an instance of this (Root) component we are gonna create a provider tag and we are gonna create redux store at the same time
// props.children is a feature of react
// it allows us to take this component that we just created and wrap other components.
export default (props) => {
  return (
    <Provider store={createStore(reducers, {})}>
      {props.children}
    </Provider>
  )
}