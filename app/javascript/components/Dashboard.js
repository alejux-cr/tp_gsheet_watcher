import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';
import CandidatesList from './candidates/List';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

function Dashboard() {
    const classes = useStyles();

    return (

        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            spacing={3}
        >

            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Typography variant="h3" gutterBottom>TalkPush candidates</Typography>
                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <CandidatesList />
                </Paper>
            </Grid>

        </Grid>


    )
}

export default Dashboard;