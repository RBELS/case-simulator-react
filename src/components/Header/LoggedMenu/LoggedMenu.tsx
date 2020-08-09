import React, { useEffect } from 'react';
import { MenuItem } from '@material-ui/core';
import { connect, useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { setUsernameTC, logOutTC } from '../../../store/reducers/authReducer/authActions';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../../store/reducers/authReducer/authSelectors';

interface PropsI {
    handleClose: () => void
    // getUsername: () => void
    // logout: () => void
    // username: string
}

const LoggedMenu = ({ handleClose }: PropsI) => {
    const dispatch = useDispatch();

    const username = useSelector(authSelectors.username);

    const handleLogOutClick = () => {
        dispatch(logOutTC());
        handleClose();
    }

    useEffect(() => {
        dispatch(setUsernameTC());
    }, []);

    return <div>
        <NavLink style={{ textDecoration: 'none', color: '#000' }} to={`/profile/${username}`}>
            <MenuItem onClick={handleClose} >{username}</MenuItem>
        </NavLink>
        <MenuItem onClick={handleLogOutClick} >Log Out</MenuItem>
    </div>
}

// const mapStateToProps = (state: RootState) => ({
//     username: state.auth.username
// })

// export default connect(mapStateToProps, { getUsername: setUsernameTC, logout: logOutTC })(LoggedMenu);
export default LoggedMenu;