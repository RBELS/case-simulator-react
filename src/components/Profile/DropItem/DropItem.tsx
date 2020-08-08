import React from 'react';
import { Grid, CardActionArea, CardContent, CardMedia, Typography, Card, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { bgStyles } from '../../CaseContent/CaseItem/Backgrounds';

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
        width: '90%'
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
        height: 'fit-content',
    },
    itemName: {
    }
});

const DropItem = () => {
    const classes = useStyles();
    const bgColor = bgStyles[5];

    return <Grid className={classes.container} item xl={2} md={2} sm={3} xs={4} >
        <Card className={classes.card}>
            <CardActionArea disableRipple className={`${classes.area}`} style={bgColor}>
                <CardMedia className={classes.itemImg} image='http://25.40.173.182:4000/img/Cobblestone/14.png'/>
            </CardActionArea>
            <CardContent className={classes.content}>
                <Typography className={classes.itemName} variant='body2'>{'AWP | История о драконе'}</Typography>
            </CardContent>
            <CardActions>
                <Button>$1200</Button>
            </CardActions>
        </Card>
    </Grid>
}

export default DropItem;