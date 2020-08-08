import React from 'react';
import { Typography, Grid, makeStyles, IconButton } from '@material-ui/core';
import { AddBoxOutlined } from '@material-ui/icons';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import DropItem from './DropItem/DropItem';

const useStyles = makeStyles({
    main: {
        margin: '2px auto'
    },
    typ: {
        textAlign: 'left',
        margin: '5px 20px',
        display: 'inline-block',
    },
    add: {
        margin: '5px 20px'
    }
});

interface ParamsI {
    username: string
}

interface PropsI extends RouteComponentProps<ParamsI> {

}

const Profile = ({ match: { params: { username } } }: PropsI) => {
    const classes = useStyles();

    return <Grid item className={classes.main} xl={8} md={9} sm={10} xs={12}>
        <Typography color='primary' variant='h2' className={classes.typ}>Account: {username}</Typography>
        <br />
        <Typography color='primary' variant='h3' className={classes.typ}>
            Balance: {300} bucks
            <IconButton className={classes.add}>
                <AddBoxOutlined color='primary' />
            </IconButton>
        </Typography>
        <br />
        <Typography color='primary' variant='h3' className={classes.typ}>Drops:</Typography>
        <Grid container>
            <DropItem />
            <DropItem />
            <DropItem />
            <DropItem />
        </Grid>
    </Grid>
}

export default withRouter(Profile);