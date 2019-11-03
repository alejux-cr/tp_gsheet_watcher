import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';

class App extends Component {
    render() {
        return (
            <Dashboard />
        )
    }
}

export default App;


{/* <div>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                </Switch>
            </div> */}