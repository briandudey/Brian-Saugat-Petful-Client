import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer' 
import registerServiceWorker from './registerServiceWorker';

function configureStore(initialState){
return createStore(rootReducer, initialState)
}

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
