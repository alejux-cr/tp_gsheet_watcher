import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { Grid } from '@material-ui/core';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Dashboard />
                <Footer />
            </Fragment>

        )
    }
}

export default App;


{/* <div>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                </Switch>
            </div> */}