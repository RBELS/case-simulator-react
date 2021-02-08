import React, { useEffect } from 'react';
import { MenuItem } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { setUsernameTC, logOutTC } from '../../../store/reducers/authReducer/authActions';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../../store/reducers/authReducer/authSelectors';

interface PropsI {
    handleClose: () => void
}

const LoggedMenu: React.FC<PropsI> = ({ handleClose }) => {
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

export default LoggedMenu;