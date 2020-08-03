import React from 'react';
import { Card, CardActionArea, CardMedia, Grid, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { bgStyles } from "./Backgrounds";
import { CaseContentItemI } from '../../../store/reducers/caseContentReducer/caseContentTypes';

const useStyles = makeStyles({
    item: {
        border: "1px solid black",
        backgroundColor: "white",
        height: 156,
    },
    itemImg: {
        width: 120,
        height: 90,
    },
    area: {
        display: "flex",
        flexDirection: "column",
    },
    card: {
        width: "90%"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "5px 0px"
    },
    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: 20
    },
});



const CaseItem = ({ avatar, id, name, price, quality }: CaseContentItemI) => {
    const classes = useStyles();

    const bgColor = bgStyles[quality];

    return <Grid className={classes.container} item xl={2} md={2} sm={3} xs={4} >
        <Card className={classes.card}>
            <CardActionArea disableRipple className={`${classes.area}`} style={bgColor}>
                <CardMedia className={classes.itemImg} image={avatar}/>
            </CardActionArea>
            <CardContent className={classes.content}>
                <Typography variant="body2">{name}</Typography>
            </CardContent>
        </Card>
    </Grid> 
    
    
}

export default CaseItem