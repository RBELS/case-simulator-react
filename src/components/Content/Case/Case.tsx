import React from 'react';
import { Grid, Typography, Card, CardContent, CardActions, Button, CardMedia, CardActionArea } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    case: {
        border: "1px solid black",
        width: "100%",
        height: "100%",
    },
    caseContainer: {
        // backgroundColor: "beige",
        width: "100%",
        // height: 300,
        display: "inline-block",
        padding: 20
    },
    media: {
        height: 125,
        width:160,
        borderRadius:10,
        marginTop: 5,
        backgroundColor: "lightgrey"
    },
    area: {
        display: "flex",
        flexDirection: "column"
    },
    bt: {
        backgroundColor: "#F3F3F3",
        "&:hover": {
            backgroundColor: "#E5E5E5"
        },
    },
}));

const Case = () => {
    const classes = useStyles();

    return <Grid className={classes.caseContainer} item xs={12} sm={6} md={3} xl={3} >
        <Card>
            <CardActionArea className={classes.area}>
                <CardMedia 
                    className={`${classes.media}`}
                    image="http://localhost:4001/img/CZ75-AUTO/index.webp"
                />

                <CardContent>
                    <Typography variant="h6">CZ75-AUTO</Typography>
                    <Typography variant="body2" component="h2">300 bucks</Typography>
                </CardContent>

            </CardActionArea>
            <CardActions>
                <NavLink style={{ textDecoration: "none" }} to={`/case/0`}>
                    <Button className={classes.bt} size="small" >Open</Button>
                </NavLink>
            </CardActions>
        </Card>
    </Grid>
}

export default Case