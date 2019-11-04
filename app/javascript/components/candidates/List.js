import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography, Button
} from '@material-ui/core';
import SyncIcon from '@material-ui/icons/Sync';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export default () => {
    const classes = useStyles();

    var [candidates, setCandidates] = useState([]);
    useEffect(() => {

        fetch('/api/candidates')
            .then(response => response.json())
            .then(data => setCandidates(candidates = [...data.candidates]))
    }, []);
    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography variant="h5" gutterBottom>Full name</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="h5" gutterBottom>Email</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="h5" gutterBottom>Pone</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="h5" gutterBottom>Syncronized at</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="h5" gutterBottom>Actions</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {candidates.map(candidate => (
                        console.log(candidate),
                        < TableRow key={Object(candidate).timestamp} >
                            <TableCell component="th" scope="row">
                                {Object(candidate).first_name + ' ' + Object(candidate).last_name}
                            </TableCell>
                            <TableCell align="right">{Object(candidate).email}</TableCell>
                            <TableCell align="right">{Object(candidate).phone}</TableCell>
                            <TableCell align="right">{Object(candidate).created_at}</TableCell>
                            <TableCell align="right">
                                {Object(candidate).is_syncronized === 1 ?
                                    'Syncronized!'
                                    :
                                    <Button variant="contained" color="primary" className={classes.button} startIcon={<SyncIcon />}>
                                        Syncronize
                                    </Button>

                                }
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper >
    );
}