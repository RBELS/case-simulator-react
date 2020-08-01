import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import LoginForm, { LoginFormDataI } from './LoginForm/LoginForm';
import { connect } from 'react-redux';
import { RootState } from '../../store/store';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { loginTC } from '../../store/reducers/authReducer/authActions';

const useStyles = makeStyles({
    form: {
    },
    grid: {
        margin: '0px auto'
    },
});

interface PropsI {
    logged: boolean
    notResponding: boolean
    login: ( username: string, password: string ) => void
}

const LoginPage = ({ logged, notResponding, login }: PropsI) => {
    const classes = useStyles();

    const handleLoginSubmit = ({ username, password }: LoginFormDataI) => {
        login(username, password);
    }

    return <Grid item className={classes.grid} xl={8} md={9} sm={10} xs={12}>
        <LoginForm onSubmit={handleLoginSubmit} />
    </Grid>
}

const mapStateToProps = (state: RootState) => ({
    logged: state.auth.logged,
    notResponding: state.auth.notResponding
});

// export default connect(mapStateToProps, {  })(LoginPage);
export default compose(
    connect(mapStateToProps, { login: loginTC }),
    withAuthRedirect
)(LoginPage);
