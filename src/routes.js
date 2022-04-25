import React from 'react';
import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom';

import Main from './pages/Main';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Main} />
        </Switch>
    </Router>
);

export default Routes;
