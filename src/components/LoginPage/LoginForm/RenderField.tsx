import React from 'react';
import { TextField } from '@material-ui/core';
import { WrappedFieldProps } from "redux-form";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  field: {
    display: 'block',
  },
  fieldContainer: {
    width: "100%",
    margin: "10px 0px"
  },
});


const RenderTextField: React.FunctionComponent<WrappedFieldProps> = ({ input, meta: { touched, invalid, error, visited }, ...custom } ) => {
    const classes = useStyles();

    return <div className={classes.fieldContainer}>
        <TextField error={visited && invalid} helperText={visited && error} {...input} {...custom} required className={classes.field} fullWidth variant="outlined" />
    </div>
}

export default RenderTextField;
