import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import reportWebVitals from './reportWebVitals';

// redux related imports
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

// importing reducers
import statusReducer from './redux/reducers/status';
import crudopsReducer from './redux/reducers/crudops';

// combining reducers and creating store with root reducer
const componeEnhancers = compose;
const rootReducer = combineReducers({
  statusReducer: statusReducer,
  crudopsReducer: crudopsReducer
})
const store = createStore(rootReducer, componeEnhancers( applyMiddleware(thunk) ) );

ReactDOM.render(
  <Provider store={store} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
