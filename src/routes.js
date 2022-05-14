import React from 'react';
import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom';

import Main from './pages/Main';
import User from './pages/User';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/Login' component={User} />
        </Switch>
    </Router>
);

export default Routes;
