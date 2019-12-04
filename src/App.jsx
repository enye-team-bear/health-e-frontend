import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Signup } from './components/signup';
import { Signin } from './components/signin';
import store from './store';
import './sass/main.scss';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/signup" component={Signup} />
                    <Route path="/signin" component={Signin} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
