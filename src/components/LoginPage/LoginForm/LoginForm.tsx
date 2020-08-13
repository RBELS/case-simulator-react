import React, { FC } from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import RenderTextField from './RenderField';
import { maxLength, minLength, requiredField } from '../../../store/validators/FormValidators';

const useStyles = makeStyles({
    form: {

    },
    innerGrid: {
        margin: '0px auto',
        padding: 20,
        marginTop: '9rem'
    },
    
    bt: {
        margin: '10px 0px'
    },
    actionsContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    error: {
        color: 'red'
    },
    createAcc: {
    }
});

const maxLength20 = maxLength(20);
const minLength8 = minLength(8);
const minLength3 = minLength(3);

interface PropsI extends InjectedFormProps<LoginFormDataI> {
    // error: string
}

const LoginForm: FC<PropsI> = ({ handleSubmit, error, ...props }) => {
    const classes = useStyles();

    return <form onSubmit={handleSubmit} name='login' className={classes.form}>
        <Grid item className={classes.innerGrid} xl={5} md={6} sm={10} xs={12}>
            <Field validate={[ requiredField, maxLength20, minLength3 ]} name='username' label='Username' component={RenderTextField} />
            <Field type='password' validate={[ requiredField, maxLength20, minLength8 ]} name='password' label='Password' component={RenderTextField} />

            <Button type='submit' className={classes.bt} fullWidth variant='contained' color='primary'>Log In</Button>

            <div className={classes.actionsContainer}>
                <Typography className={classes.error}>{error}</Typography>
                <NavLink style={{ textDecoration: 'none', color: '#3f51b5' }} to='/register'>
                    <Typography className={classes.createAcc}>Create Account</Typography>
                </NavLink>
            </div>
        </Grid>
    </form>
}

export interface LoginFormDataI {
    username?: string
    password?: string
}

export default reduxForm({ form: 'login' })(LoginForm);
