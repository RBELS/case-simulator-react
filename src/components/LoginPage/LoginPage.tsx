import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';

const useStyles = makeStyles({
    form: {
    },
    grid: {
        margin: '0px auto'
    },
});

const LoginPage = () => {
    const classes = useStyles();

    const handleLoginSubmit = (formdata) => {
        console.log(formdata);
    }

    return <Grid item className={classes.grid} xl={8} md={9} sm={10} xs={12}>
        <LoginForm onSubmit={handleLoginSubmit} />
    </Grid>
}

export default LoginPage