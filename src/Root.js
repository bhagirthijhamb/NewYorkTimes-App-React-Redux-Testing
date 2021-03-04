import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from './reducers';

// functional React component with no name
// Root component is responsible for setting up the redux store and placing the Provider tag and then simply rendering any children that is provided
// anytime we create an instance of this (Root) component we are gonna create a provider tag and we are gonna create redux store at the same time
// props.children is a feature of react
// it allows us to take this component that we just created and wrap other components.

// export default (props) => {
// destructuring in order to set default value ti initialState for the components that do not pass initialState prop(ArticleList.test.js passes initialState prop )
export default ({ children, initialState = {}}) => {
  const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));

  return (
    // <Provider store={createStore(reducers, {})}>
    // <Provider store={createStore(reducers, props.initialState)}>
    // <Provider store={createStore(reducers, initialState)}>
    <Provider store={store}>
      {/* {props.children} */}
      {children}
    </Provider>
  )
}

// we customise how the Root component works
// we say that any of the test files that want to use Root component can optionaly pass an additional argument (additional prop to Root)
// this props will be utilized to initialize the state within the redux store 