import React, { useState, MouseEvent } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    toolBar: {
        flexGrow: 1, 
        justifyContent: "space-between",
        height: 100
    },
    panel: {
        height: 80,
        width: "80%",
        display: "flex",
        overflow: "hidden"
        // backgroundColor: "black"
    },
    testItem: {
        width: 70,
        minWidth: 70,
        height: 70,
        margin: 5,
        borderRadius: "40%",
        backgroundColor: "white"
    },
    menu: {
        
    }
});

const Header = () => {
    const classes = useStyles();
    const [ opened, setOpened ] = useState(false);
    const auth = false;

    const handleClose = () => {
        setOpened(false);
    }

    const handleOpen = (e: MouseEvent<HTMLElement>) => {
        setOpened(true);
    }

    return <AppBar style={{ height: 100 }} position="static">
        <Toolbar className={classes.toolBar}>
            {/* <Typography variant="h6">
                Case Simulator
            </Typography> */}
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
                {/* <div className={classes.testItem}></div> */}
            </div>

            <IconButton onClick={handleOpen} aria-controls="menu-appbar" >
                <AccountCircle fontSize="large" edgeMode="end"/>
            </IconButton>

            <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={opened}
                onClose={handleClose}
                className={classes.menu}
            >
                {auth && <>
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >Log Out</MenuItem>
                </>}

                {!auth && <>
                    <MenuItem>Sign Up</MenuItem>
                </>}
                
            </Menu>
        </Toolbar>
    </AppBar>
}

export default Header