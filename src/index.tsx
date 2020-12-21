import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import './index.css';
import App from './components/app/App';
import Intro from './containers/Intro';
import reportWebVitals from './utils/reportWebVitals';



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/app"><App /></Route>
      <Route><Intro /></Route>
    </Switch>

  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
