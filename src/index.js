import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './containers/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <h1 className="header">Star Wars</h1>
  </React.StrictMode>,
  document.getElementById('root')
);
