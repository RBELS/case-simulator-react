import React, { useState } from 'react';
import { Grid, CardActionArea, CardContent, CardMedia, Typography, Card, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { bgStyles } from '../../CaseContent/CaseItem/Backgrounds';
import { DropItemI } from '../../../store/reducers/profileReducer/profileTypes';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sellItemTC } from '../../../store/reducers/profileReducer/profileActions';

const useStyles = makeStyles({
    item: {
        border: '1px solid black',
        backgroundColor: 'white',
        height: 156,
    },
    itemImg: {
        width: 120,
        height: 90,
    },
    area: {
        display: 'flex',
        flexDirection: 'column',
    },
    card: {
        width: '90%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '5px 0px',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'fit-content'
    },
    itemName: {
    },
    sellButton: {
        width: 80,
        backgroundColor: '#6cff5f',
        '&:hover': {
            backgroundColor: '#4eb844'
        }
    },
    soldTyp: {
        border: '1px dashed #ccc',
        borderRadius: 5,
        padding: 6.5,
        fontSize: 14
    },
    actions: {
    }
});

interface PropsI extends DropItemI {
    myProfile?: boolean
}

const DropItem: React.FC<PropsI> = ({ avatar, caseavatar, name, price, quality, sold, caseid, rowid, myProfile }) => {
    const classes = useStyles();
    const bgColor = bgStyles[quality];
    const dispatch = useDispatch();

    const [ hover, setHover ] = useState(false);

    const onMouseEnter = () => {
        setHover(true);
    }

    const onMouseLeave = () => {
        setHover(false);
    }

    const handleSell = () => {
        dispatch(sellItemTC(rowid));
    }

    return <Grid className={classes.container} item xl={2} md={2} sm={3} xs={4} >
        <Card onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={classes.card}>
            <NavLink style={{ color: '#000000', textDecoration: 'none' }} to={`/case/${caseid}`}>
                <CardActionArea disableRipple className={`${classes.area}`} style={bgColor}>
                    <CardMedia className={classes.itemImg} image={ hover ? caseavatar : avatar }/>
                </CardActionArea>
                <CardContent className={classes.content}>
                    <Typography className={classes.itemName} variant='body2'>{name}</Typography>
                </CardContent>
            </NavLink>
            <CardActions className={classes.actions}>
                {sold ? <Typography className={classes.soldTyp}>Sold: ${price}</Typography> : <Button onClick={myProfile ? handleSell : undefined} className={classes.sellButton}>${price}</Button>}
            </CardActions>
        </Card>
    </Grid>
}

export default DropItem;