import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { HeaderItemI } from '../../../store/reducers/headerReducer/headerTypes';
import { Card, CardActionArea, CardMedia, Typography, CardContent } from '@material-ui/core';
import { bgStyles } from '../../CaseContent/CaseItem/Backgrounds';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    itemImg: {
        width: 56,
        height: 42,
    },
    area: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 70
    },
    card: {
        width: 70,
        minWidth: 70,
        margin: 5,
        '&:hover .hov': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start'
        }
    },
    user: {
        position: 'absolute',
        zIndex: 5,
        display: 'none',
        padding: 0,
        width: 70
    },
    typ: {
        width: 70,
        wordWrap: 'break-word',
        textAlign: 'center',
        margin: '8px 0px 0px 0px'
    }
});

interface PropsI extends HeaderItemI {

}

const HeaderItem: React.FC<PropsI> = ({ avatar, quality, caseavatar, name, user }) => {
    const [ hover, setHover ] = useState(false);

    const onMouseEnter = () => {
        setHover(true);
    }

    const onMouseLeave = () => {
        setHover(false);
    }

    const classes = useStyles();
    const bgColor = bgStyles[quality];

    // return <div className={classes.testItem}></div>;
    return <NavLink to={`/profile/${user}`}>
        <Card onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={classes.card}>
            <CardActionArea disableRipple className={`${classes.area}`} style={bgColor} >
                <CardMedia className={classes.itemImg} image={hover ? caseavatar : avatar} />
            </CardActionArea>
            <CardContent className={`${classes.user} hov`} >
                <Typography className={classes.typ}>{user}</Typography>
            </CardContent>
        </Card>
    </NavLink>
}

export default HeaderItem;