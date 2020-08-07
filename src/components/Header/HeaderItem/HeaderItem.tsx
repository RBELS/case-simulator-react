import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { HeaderItemI } from '../../../store/reducers/headerReducer/headerTypes';
import { Card, CardActionArea, CardMedia } from '@material-ui/core';
import { bgStyles } from '../../CaseContent/CaseItem/Backgrounds';

// const useStyles = makeStyles({
//     testItem: {
//         width: 70,
//         minWidth: 70,
//         height: 70,
//         margin: 5,
//         borderRadius: '10%',
//         backgroundColor: 'white'
//     },
// });

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
        
    },
});

interface PropsI extends HeaderItemI {

}

const HeaderItem = ({ avatar, quality, caseavatar }: PropsI) => {
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
    return <Card onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={classes.card}>
        <CardActionArea disableRipple className={`${classes.area}`} style={bgColor} >
            <CardMedia className={classes.itemImg} image={hover ? caseavatar : avatar} />
        </CardActionArea>
    </Card>
}

export default HeaderItem;