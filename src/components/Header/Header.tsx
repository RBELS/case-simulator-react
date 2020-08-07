import React, { useState, MouseEvent, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { RootState } from '../../store/store';
import IncognitoMenu from './IncognitoMenu/IncognitoMenu';
import LoggedMenu from './LoggedMenu/LoggedMenu';
import { setHeaderItemsTC, updateHeaderTC } from '../../store/reducers/headerReducer/headerActions';
import { HeaderItemI } from '../../store/reducers/headerReducer/headerTypes';
import HeaderItem from './HeaderItem/HeaderItem';

const useStyles = makeStyles({
    toolBar: {
        flexGrow: 1, 
        justifyContent: 'space-between',
        height: 100
    },
    panel: {
        height: 80,
        width: '85%',
        display: 'flex',
        overflow: 'hidden'
        // backgroundColor: 'black'
    },
    testItem: {
        width: 70,
        minWidth: 70,
        height: 70,
        margin: 5,
        borderRadius: '10%',
        backgroundColor: 'white'
    },
    menu: {
        
    }
});

interface PropsI {
    logged: boolean
    headerItems: Array<HeaderItemI>
    lastRowId: number
    setHeaderItems: () => void
    updateHeader: (lastRowId: number) => void
}

const Header = ({ logged, headerItems, lastRowId, setHeaderItems, updateHeader }: PropsI) => {
    const classes = useStyles();
    const [ opened, setOpened ] = useState<boolean>(false);
    const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null);

    useEffect(() => {
        setHeaderItems();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            updateHeader(lastRowId);
        }, 7000);

        return () => {
            clearInterval(interval);
        }
    }, [lastRowId]);

    const handleClose = () => {
        setOpened(false);
        setAnchorEl(null);
    }

    const handleOpen = (event: MouseEvent<HTMLElement>) => {
        setOpened(true);
        setAnchorEl(event.currentTarget);
    }

    return <AppBar style={{ height: 100 }} position='static'>
        <Toolbar className={classes.toolBar}>
            <NavLink to='/' style={{ textDecoration: 'none', color: '#fff' }}>
                <Typography variant='h6'>
                    Case Simulator
                </Typography>
            </NavLink>
            <div className={classes.panel}>
                {headerItems.map(item => <HeaderItem {...item} key={item.rowid} />)}
            </div>

            <IconButton onClick={handleOpen} aria-controls='menu-appbar' >
                <AccountCircle fontSize='large' edgeMode='end'/>
            </IconButton>

            <Menu id='menu-appbar' open={opened} onClose={handleClose} className={classes.menu} anchorEl={anchorEl}
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
    logged: state.auth.logged,
    headerItems: state.header.headerItems,
    lastRowId: state.header.lastRowId
});

export default connect(mapStateToProps, { setHeaderItems: setHeaderItemsTC, updateHeader: updateHeaderTC })(Header)