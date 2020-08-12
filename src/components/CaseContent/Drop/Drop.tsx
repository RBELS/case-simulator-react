import React, { useEffect } from 'react';
import { Card, CardActionArea, CardMedia, Typography, Button } from '@material-ui/core';
import { CaseContentItemI, CurrentDropItemI } from '../../../store/reducers/caseContentReducer/caseContentTypes';
import { makeStyles } from '@material-ui/styles';
import { bgStyles } from '../CaseItem/Backgrounds';
import { useDispatch, useSelector } from 'react-redux';
import { showDropTC, sellItemImmedaiteTC } from '../../../store/reducers/caseContentReducer/caseContentActions';
import caseContentSelectors from '../../../store/reducers/caseContentReducer/caseContentSelectors';

const useStyles = makeStyles({
    itemImg: {
        width: 200,
        height: 150,
    },
    area: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 140
    },
    card: {
        margin: '15px 0px',
    },
    bt: {
        margin: 7
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

interface PropsI {
    item: CurrentDropItemI
}

const Drop = ({ item: { avatar, id, name, price, quality, rowid } }: PropsI) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const bgColor = bgStyles[quality];
    const sold = useSelector(caseContentSelectors.currentDropSold);

    useEffect(() => {
        return () => {
            dispatch(showDropTC(false));
        }
    }, [])

    const handleTryAgain = () => {
        dispatch(showDropTC(false));
    }

    const handleSell = () => {
        dispatch(sellItemImmedaiteTC(rowid));
    }

    return <>
        <Card className={classes.card}>
            <CardActionArea disableRipple className={`${classes.area}`} style={bgColor} >
                <CardMedia className={classes.itemImg} image={avatar} />
            </CardActionArea>
        </Card>
        <Typography color='primary' variant='h6' >{name}</Typography>
        <Typography color='primary' >Price: {price} bucks</Typography>
        <div className={classes.buttonContainer}>
            <Button onClick={handleTryAgain} className={classes.bt} variant='contained' color='primary' >Try again</Button>
            {!sold && <Button onClick={handleSell} className={classes.bt} variant='contained' color='primary' >Sell</Button>}
        </div>
    </>
}

export default Drop;