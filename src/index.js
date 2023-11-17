// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import axios from 'axios';

import Router from './Router';
import './styles/reset.scss';
import './styles/common.scss';
import store from './store';

axios.defaults.baseURL = 'http://43.202.41.4:8080';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router />
    </Provider>,
);
