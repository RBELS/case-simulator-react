import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import Case from './Case/Case';

const useStyles = makeStyles({
    container: {
        marginTop: 0
    },
    paper: {

    },
    side: {

    },
    center: {
        
    }
});

const Content = () => {
    const classes = useStyles();

    return <Grid className={classes.container} container>
        <Grid className={classes.side} item xl={2}  md={1} sm={1} xs={false}></Grid>{/*sidebar*/}

        <Grid className={classes.center} item xl={8}  md={10} sm={10} xs={12}>
            <Case />
            <Case />
            <Case />
            <Case />
            <Case />
        </Grid>

        <Grid className={classes.side} item xl={2} md={1} sm={1} xs={false}></Grid>{/*sidebar*/}
    </Grid>
}

export default Content