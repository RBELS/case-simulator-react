import React, { useEffect } from 'react';
import { Typography, Grid, makeStyles, IconButton, Button } from '@material-ui/core';
import { AddBoxOutlined } from '@material-ui/icons';
import { useParams } from 'react-router-dom';
import DropItem from './DropItem/DropItem';
import { useDispatch, useSelector } from 'react-redux';
import { profileSelectors } from '../../store/reducers/profileReducer/profileSelectors';
import { setProfileInfoTC, showMoreTC } from '../../store/reducers/profileReducer/profileActions';

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
    },
    error: {
        textAlign: 'center',
        margin: '30vh auto'
    },
    showMore: {
        margin: '20px 0px'
    },
    showMoreContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    loading: {
        padding: 6.5,
        borderRadius: 5,
        margin: '20px 0px',
        border: '1px dashed #ccc'
    }
});

interface ProfileParamsI {
    username: string
}

interface PropsI {

}

const Profile = ({  }: PropsI) => {
    const classes = useStyles();
    const { username } = useParams<ProfileParamsI>();
    const dispatch = useDispatch();

    const exists = useSelector(profileSelectors.exists);
    const usernameStore = useSelector(profileSelectors.username);
    const balance = useSelector(profileSelectors.balance);
    const myProfile = useSelector(profileSelectors.myProfile);
    const drops = useSelector(profileSelectors.drops);
    const lodaingDrops = useSelector(profileSelectors.loadingDrops);
    const page = useSelector(profileSelectors.page);
    const noMoreDrops = useSelector(profileSelectors.noMoreDrops);

    useEffect(() => {
        dispatch(setProfileInfoTC(username));
    }, [username]);

    const handleShowMore = () => {
        dispatch(showMoreTC(usernameStore, page));
    }

    return <Grid item className={classes.main} xl={8} md={9} sm={10} xs={12}>
        {
        exists ? <>
            <Typography color='primary' variant='h2' className={classes.typ}>Account: {usernameStore}</Typography>
            <br />
            {myProfile && balance && <Typography color='primary' variant='h3' className={classes.typ}>
                Balance: {Math.floor(balance)} bucks
                <IconButton className={classes.add}>
                    <AddBoxOutlined color='primary' />
                </IconButton>
            </Typography>}
            <br />
            <Typography color='primary' variant='h3' className={classes.typ}>Drops:</Typography>
            <Grid container>
                {drops.map(drop => <DropItem {...drop} key={drop.rowid} myProfile={myProfile} />)}
            </Grid>
            <div className={classes.showMoreContainer}>
                {noMoreDrops ?
                null
                :
                lodaingDrops ?
                <Typography color='primary' className={classes.loading}>Loading...</Typography>
                :
                <Button onClick={handleShowMore} className={classes.showMore} variant='contained' color='primary' >Show More</Button>
                }
            </div>
        </>
        :
        <Typography variant='h2' color='primary' className={classes.error} >This user does not exist</Typography>
        }
    </Grid>
}

export default Profile;