import React, { useEffect } from 'react';
import { MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';
import { RootState } from '../../../store/store';
import { setUsernameTC, logOutTC } from '../../../store/reducers/authReducer/authActions';
import { NavLink } from 'react-router-dom';

interface PropsI {
    handleClose: () => void
    getUsername: () => void
    logout: () => void
    username: string
}

const LoggedMenu = ({ handleClose, getUsername, logout, username }: PropsI) => {
    const handleLogOutClick = () => {
        logout();
        handleClose();
    }

    useEffect(() => {
        getUsername();
    }, []);

    return <div>
        <NavLink style={{ textDecoration: 'none', color: '#000' }} to={`/profile/${username}`}>
            <MenuItem onClick={handleClose} >{username}</MenuItem>
        </NavLink>
        <MenuItem onClick={handleLogOutClick} >Log Out</MenuItem>
    </div>
}

const mapStateToProps = (state: RootState) => ({
    username: state.auth.username
})

export default connect(mapStateToProps, { getUsername: setUsernameTC, logout: logOutTC })(LoggedMenu);
