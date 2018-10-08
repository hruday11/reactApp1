import React from 'react';
import ReactDOM from 'react-dom';
import  thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './Reducers/index';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import setAuthorizationToken from './Utils/setAuthToken';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

setAuthorizationToken(sessionStorage.getItem('token'));

ReactDOM.render(
<BrowserRouter>
<Provider store={store}>
<App />
</Provider>
</BrowserRouter>, 
document.getElementById('root'));
registerServiceWorker();
