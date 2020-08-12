import React, { FunctionComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../store/reducers/authReducer/authSelectors';

const withAuthRedirect = (Component) => {
    const RedirectComponent = (props: any) => {
        const logged = useSelector(authSelectors.logged);

        return logged ?
        <Redirect to='/' />
        :
        <Component {...props} />
    }

    return RedirectComponent;
}

export default withAuthRedirect