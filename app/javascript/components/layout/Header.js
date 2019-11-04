import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import { createMuiTheme } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

}));


function Header() {
    const classes = useStyles();


    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <TrackChangesIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    GoogleSheet Watcher
                </Typography>

            </Toolbar>
        </AppBar>
    )

}

export default Header