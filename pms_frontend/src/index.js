import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
