import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const root = document.getElementById('root');
if (root) {
    ReactDOM.render(
        <BrowserRouter basename={process.env.ROUTER_BASE_URL}>
            <App />
        </BrowserRouter>,
        root
    );
}
