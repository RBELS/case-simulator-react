import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import LoginForm, { LoginFormDataI } from './LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { loginTC } from '../../store/reducers/authReducer/authActions';

const useStyles = makeStyles({
    form: {
    },
    grid: {
        margin: '0px auto'
    },
});

interface PropsI {
}

const LoginPage: React.FC<PropsI> = ({  }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleLoginSubmit = ({ username, password }: LoginFormDataI) => {
        dispatch(loginTC(username, password));
    }

    return <Grid item className={classes.grid} xl={8} md={9} sm={10} xs={12}>
        <LoginForm onSubmit={handleLoginSubmit} />
    </Grid>
}

export default withAuthRedirect(LoginPage)