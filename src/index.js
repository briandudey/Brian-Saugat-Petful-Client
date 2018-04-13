import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer' 
import registerServiceWorker from './registerServiceWorker';

const middlewares = [thunk];
function configureStore(initialState){
return createStore(rootReducer, initialState, applyMiddleware(...middlewares))
}

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
