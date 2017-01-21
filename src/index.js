import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Button from './components/Button';
import Camera from './components/Camera';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Button}/>
      <Route path="/camera" component={Camera}/>
    </Route>
  </Router>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
