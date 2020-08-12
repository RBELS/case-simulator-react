import React from 'react';
import { Typography, makeStyles, Grid } from '@material-ui/core';

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

interface PropsI {
    error: string
}

const Error = ({ error }: PropsI) => {
    const classes = useStyles();

    return <Grid className={classes.grid} item xl={8} md={9} sm={10} xs={12} >
        <Typography color='primary' className={classes.typography}>{ error }</Typography>
    </Grid>
}

export default Error;