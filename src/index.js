import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Rough from './RoughApp';
import { BrowserRouter } from 'react-router-dom';
import Controlledforms from './Controlled forms';
import Form from './Crud';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
   <Rough/>
   </BrowserRouter>
   
   
 </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
