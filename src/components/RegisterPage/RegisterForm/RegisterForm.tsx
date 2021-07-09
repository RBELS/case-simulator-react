import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button } from '@material-ui/core';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import RenderTextField from '../../LoginPage/LoginForm/RenderField';
import { maxLength, minLength, requiredField, passwordsMatch, registerFormAsyncValidate } from '../../../store/validators/FormValidators';

const maxLength20 = maxLength(20);
const minLength8 = minLength(8);
const minLength3 = minLength(3);

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

interface PropsI extends InjectedFormProps {
}

const RegisterForm: React.FC<PropsI> = ({ handleSubmit, ...props }) => {
    const classes = useStyles();

    return <form onSubmit={handleSubmit} name='register' className={classes.form}>
        <Grid item className={classes.innerGrid} xl={5} md={6} sm={10} xs={12}>
            <Field validate={[ requiredField, maxLength20, minLength3 ]} name='username' label='Username' component={RenderTextField} />
            <Field type='password' validate={[ requiredField, maxLength20, minLength8 ]} name='password' label='Password' component={RenderTextField} />
            <Field type='password' validate={[ requiredField, maxLength20, minLength8, passwordsMatch ]} name='repeatPassword' label='Repeat password' component={RenderTextField} />

            <Button type='submit' className={classes.bt} fullWidth variant='contained' color='primary'>Register</Button>

            <div className={classes.actionsContainer}>
                {/* <Typography className={classes.error}>{"Error"}</Typography> */}
            </div>
        </Grid>
    </form>
}

export interface registerFormData {
    username?: string
    password?: string
    repeatPassword?: string
}

export default reduxForm({
    form: 'register',
    asyncBlurFields: [ 'username' ],
    asyncValidate: registerFormAsyncValidate
})(RegisterForm);