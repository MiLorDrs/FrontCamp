import './src/stylesheets/buttons.scss';
import './src/stylesheets/news.scss';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './modules/App';
import UserView from './modules/UserView';
import Login from './modules/Login';
import Register from './modules/Register';

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/user-view" component={UserView}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
    </Router>
), document.getElementById('app'));
