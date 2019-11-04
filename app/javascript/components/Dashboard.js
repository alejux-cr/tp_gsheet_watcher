import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, Button } from '@material-ui/core';
import Refresh from '@material-ui/icons/Refresh';
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
                    <Button onClick={() => { window.location.reload() }} variant="contained" color="primary" className={classes.button} startIcon={<Refresh />}>
                        Refresh
                    </Button>
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