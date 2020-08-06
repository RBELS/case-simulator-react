import React, { useEffect } from 'react';
import { Card, CardActionArea, CardMedia, Typography, Button } from '@material-ui/core';
import { CaseContentItemI } from '../../../store/reducers/caseContentReducer/caseContentTypes';
import { makeStyles } from '@material-ui/styles';
import { bgStyles } from '../CaseItem/Backgrounds';

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
        margin: 5
    }
});

interface PropsI {
    item: CaseContentItemI
    setShowDrop: (show: boolean) => void
}

const Drop = ({ item: { avatar, id, name, price, quality }, setShowDrop }: PropsI) => {
    const classes = useStyles();
    const bgColor = bgStyles[quality];

    useEffect(() => {
        return () => {
            setShowDrop(false);
        }
    }, [])

    return <>
        <Card className={classes.card}>
            <CardActionArea disableRipple className={`${classes.area}`} style={bgColor} >
                <CardMedia className={classes.itemImg} image={avatar} />
            </CardActionArea>
        </Card>
        <Typography color='primary' variant='h6' >{name}</Typography>
        <Typography color='primary' >Price: {price} bucks</Typography>
        <Button onClick={ () => { setShowDrop(false) } } className={classes.bt} variant='contained' color='primary' >Try again</Button>
    </>
}

export default Drop;