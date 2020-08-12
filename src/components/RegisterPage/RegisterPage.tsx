import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import RegisterForm, { registerFormData } from './RegisterForm/RegisterForm';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { useDispatch } from 'react-redux';
import { registerTC } from '../../store/reducers/authReducer/authActions';

const useStyles = makeStyles({
    grid: {
        margin: '0px auto'
    }
});

interface PropsI {
    
}

const RegisterPage = ({  }: PropsI) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleRegisterSubmit = ({ username, password }: registerFormData) => {
        dispatch(registerTC(username, password));
    }

    return <Grid item className={classes.grid} xl={8} md={9} sm={10} xs={12}>
        <RegisterForm onSubmit={handleRegisterSubmit} />
    </Grid>
}

export default withAuthRedirect(RegisterPage)