import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import todoApp from './reducers/todoApp';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

const store = createStore(todoApp);

render(
  <Provide store={store}>
      <App/>
  </Provide>,
  document.getElementById('root')
);

