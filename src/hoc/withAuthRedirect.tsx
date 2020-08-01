import React, { FunctionComponent } from 'react';
import { Redirect } from 'react-router-dom';

interface PropsI {
    logged: boolean
}

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props: PropsI) => {
        const { logged } = props;

        return logged ?
        <Redirect to='/' />
        :
        <Component {...props} />
    }

    return RedirectComponent;
}