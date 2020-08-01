import React, { useEffect } from 'react';
import { MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';
import { RootState } from '../../../store/store';
import { setUsernameTC } from '../../../store/reducers/authReducer/authActions';

interface PropsI {
    handleClose: () => void
    getUsername: () => void
    username: string
}

const LoggedMenu = ({ handleClose, getUsername, username }: PropsI) => {
    useEffect(() => {
        getUsername();
    }, []);

    return <div>
        <MenuItem onClick={handleClose} >{username}</MenuItem>
        <MenuItem onClick={handleClose} >Log Out</MenuItem>
    </div>
}

const mapStateToProps = (state: RootState) => ({
    username: state.auth.username
})

export default connect(mapStateToProps, { getUsername: setUsernameTC })(LoggedMenu);
