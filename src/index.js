import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import  'bootstrap/dist/js/bootstrap.min.js';
import store from './store/index';
import { Provider } from "react-redux";

ReactDOM.render(

  <Provider store={store}>
    <Router>
    <App/>
    </Router>
  </Provider>,

  document.getElementById('root')
);


