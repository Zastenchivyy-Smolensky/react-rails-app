import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/auth/App';
import { BrowserRouter } from 'react-router-dom';
import App1 from "./components/todos/App1";
ReactDOM.render(
  <BrowserRouter>
    <App />
    
  </BrowserRouter> ,
  document.getElementById('root')
);