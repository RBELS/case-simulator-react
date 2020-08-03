import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import RegisterForm, { registerFormData } from './RegisterForm/RegisterForm';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { RootState } from '../../store/store';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { registerTC } from '../../store/reducers/authReducer/authActions';

const useStyles = makeStyles({
    grid: {
        margin: '0px auto'
    }
});

interface PropsI {
    register: (username: string, password: string) => void
}

const RegisterPage = ({ register }: PropsI) => {
    const classes = useStyles();

    const handleRegisterSubmit = ({ username, password }: registerFormData) => {
        console.log(`${username} | ${password}`);
        register(username, password);
    }

    return <Grid item className={classes.grid} xl={8} md={9} sm={10} xs={12}>
        <RegisterForm onSubmit={handleRegisterSubmit} />
    </Grid>
}

const mapStateToProps = (state: RootState) => ({
    logged: state.auth.logged,
    notResponding: state.auth.notResponding
});

export default compose(
    connect(mapStateToProps, { register: registerTC }),
    withAuthRedirect
)(RegisterPage);