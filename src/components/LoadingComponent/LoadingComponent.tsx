import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    grid: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '36vh auto'
    },
    typography: {
        height: '100%',
        fontSize: '2rem',
        textAlign: 'center'
    }
});

const LoadingComponent = () => {
    const classes = useStyles();

    return <Grid className={classes.grid} item xl={8} md={9} sm={10} xs={12} >
        <Typography color='primary' className={classes.typography}>Loading ...</Typography>
    </Grid>
}

export default LoadingComponent
