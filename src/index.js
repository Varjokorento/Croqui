import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Navigation from './Components/Navigation';
import Card from './Components/Card';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route path="/App" component={App} />
      </Switch>
    </div>
    </BrowserRouter>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
