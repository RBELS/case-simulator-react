import React, { useState, MouseEvent } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { RootState } from '../../store/store';
import IncognitoMenu from './IncognitoMenu/IncognitoMenu';
import LoggedMenu from './LoggedMenu/LoggedMenu';

const useStyles = makeStyles({
    toolBar: {
        flexGrow: 1, 
        justifyContent: "space-between",
        height: 100
    },
    panel: {
        height: 80,
        width: "85%",
        display: "flex",
        overflow: "hidden"
        // backgroundColor: "black"
    },
    testItem: {
        width: 70,
        minWidth: 70,
        height: 70,
        margin: 5,
        borderRadius: "10%",
        backgroundColor: "white"
    },
    menu: {
        
    }
});

interface PropsI {
    logged: boolean
}

const Header = ({ logged }: PropsI) => {
    const classes = useStyles();
    const [ opened, setOpened ] = useState<boolean>(false);
    const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null);

    const handleClose = () => {
        setOpened(false);
        setAnchorEl(null);
    }

    const handleOpen = (event: MouseEvent<HTMLElement>) => {
        setOpened(true);
        setAnchorEl(event.currentTarget);
    }

    return <AppBar style={{ height: 100 }} position="static">
        <Toolbar className={classes.toolBar}>
            <NavLink to="/" style={{ textDecoration: "none", color: '#fff' }}>
                <Typography variant="h6">
                    Case Simulator
                </Typography>
            </NavLink>
            <div className={classes.panel}>
                <div className={classes.testItem}></div>
                <div className={classes.testItem}></div>
                <div className={classes.testItem}></div>
                <div className={classes.testItem}></div>
                <div className={classes.testItem}></div>
                <div className={classes.testItem}></div>
                <div className={classes.testItem}></div>
                <div className={classes.testItem}></div>
                <div className={classes.testItem}></div>
                <div className={classes.testItem}></div>
                <div className={classes.testItem}></div>
                <div className={classes.testItem}></div>
                <div className={classes.testItem}></div>
                <div className={classes.testItem}></div>
                <div className={classes.testItem}></div>
                <div className={classes.testItem}></div>
                <div className={classes.testItem}></div>
                <div className={classes.testItem}></div>
                <div className={classes.testItem}></div>
                <div className={classes.testItem}></div>
            </div>

            <IconButton onClick={handleOpen} aria-controls="menu-appbar" >
                <AccountCircle fontSize="large" edgeMode="end"/>
            </IconButton>

            <Menu id="menu-appbar" open={opened} onClose={handleClose} className={classes.menu} anchorEl={anchorEl}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                {logged && <LoggedMenu handleClose={handleClose} />}

                {!logged && <IncognitoMenu handleClose={handleClose} />}
                
            </Menu>
        </Toolbar>
    </AppBar>
}

const mapStateToProps = (state: RootState) => ({
    logged: state.auth.logged
});

export default connect(mapStateToProps)(Header)