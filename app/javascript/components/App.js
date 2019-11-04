import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#132d3a'
        },
        secondary: {
            main: '#01dc5b'
        },
    },
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Fragment>
                    <Header />
                    <Dashboard />
                    <Footer />
                </Fragment>
            </MuiThemeProvider>


        )
    }
}

export default App;


{/* <div>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                </Switch>
            </div> */}