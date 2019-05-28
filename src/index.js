// eslint-disable-next-line react/jsx-closing-tag-location
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import App from './containers/App';
import Store from './store';
import './assets/index.css';

render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));
