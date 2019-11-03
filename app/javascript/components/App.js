import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                </Switch>
            </div>
        )
    }
}

export default App;