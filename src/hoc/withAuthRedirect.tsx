import { FunctionComponent } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../store/reducers/authReducer/authSelectors';

const withAuthRedirect = (Component: FunctionComponent) => {
    const RedirectComponent = (props: any) => {
        const logged = useSelector(authSelectors.logged);

        return logged ?
        <Navigate to='/' />
        :
        <Component {...props} />
    }

    return RedirectComponent;
}

export default withAuthRedirect