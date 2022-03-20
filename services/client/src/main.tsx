import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

if (typeof (window as any).global === 'undefined') {
  (window as any).global = window;
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
