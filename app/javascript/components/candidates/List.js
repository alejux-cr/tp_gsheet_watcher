import React, { useEffect, useState, Fragment } from 'react';
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

        return () => {
            setCandidates(candidates = [])
        }
    }, []);
    var [reload, setReload] = useState(false);

    const postCandidates = async () => {

        var promise = await syncCandidates();
        window.location.reload();
    }
    async function syncCandidates() {
        var promise;
        for (const candidate of candidates) {
            {
                if (Object(candidate).is_syncronized == 0) {
                    var params = {
                        "timestamp": candidate.timestamp,
                        "first_name": candidate.first_name,
                        "last_name": candidate.last_name,
                        "email": candidate.email,
                        "phone": candidate.phone
                    }
                    promise = fetch('/api/candidates', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(params)
                    })
                        .then(async (res) => {
                            const st = await res.status;
                            return Promise.resolve(res)
                        })
                }
            }
        }
        return promise;
    };

    return (
        <Paper className={classes.root}>
            {candidates.length > 0 ?
                <Fragment>
                    <Button onClick={postCandidates} variant="contained" color="secondary" className={classes.button} startIcon={<SyncIcon />}>
                        Syncronize
                    </Button>
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
                                    <Typography variant="h5" gutterBottom>Phone</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h5" gutterBottom>Syncronized at</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h5" gutterBottom>Status</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {candidates.map(candidate => (
                                Object(candidate).is_syncronized == 0 ?
                                    < TableRow key={Object(candidate).timestamp} >
                                        <TableCell component="th" scope="row">
                                            {Object(candidate).first_name + ' ' + Object(candidate).last_name}
                                        </TableCell>
                                        <TableCell align="right">{Object(candidate).email}</TableCell>
                                        <TableCell align="right">{Object(candidate).phone}</TableCell>
                                        <TableCell align="right">{Object(candidate).created_at}</TableCell>
                                        <TableCell align="right">Pending</TableCell>
                                    </TableRow>
                                    :
                                    null
                            ))}

                        </TableBody>
                    </Table>
                </Fragment>

                :
                <Typography variant="h4" gutterBottom>All candidates are syncronized!</Typography>
            }

        </Paper >
    );
}