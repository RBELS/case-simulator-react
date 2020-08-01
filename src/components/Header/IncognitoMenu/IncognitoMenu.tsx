import React from 'react';
import { MenuItem } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

interface PropsI {
    handleClose: () => void
}

const IncognitoMenu = ({ handleClose }: PropsI) => {
    return <div>
        <NavLink style={{ textDecoration: "none", color: "#000" }} to="/login">
            <MenuItem onClick={handleClose}>Sign Up</MenuItem>
        </NavLink>
    </div>
}

export default IncognitoMenu;
