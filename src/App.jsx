import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Signup } from './components/signup';

import './sass/main.scss';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/signup" component={Signup} />
            </Switch>
        </Router>
    );
}

export default App;
