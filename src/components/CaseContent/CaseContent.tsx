import React, { useEffect, MouseEvent, SyntheticEvent } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography, CardActionArea, CardMedia, Button, Card, makeStyles } from '@material-ui/core';
import CaseItem from './CaseItem/CaseItem';
import { setCaseContentTC, openCaseTC, stopOpenCaseTC, showDropTC, setOpenErrorAC } from '../../store/reducers/caseContentReducer/caseContentActions';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import Roulette from './Roulette/Roulette';
import Drop from './Drop/Drop';
import caseContentSelectors from '../../store/reducers/caseContentReducer/caseContentSelectors';
import Error from '../Error/Error';

const useStyles = makeStyles({
    main: {
        margin: '2px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0px 10px'
    },
    caseImg: {
        width: 256,
        height: 200,
        margin: 2
    },
    openBt: {
        margin: 5
    },
    items: {
        margin: '2px auto'
    },
    caseName: {
        fontWeight: 300
    },
    card: {
        height: 200,
        margin: '15px 0px'
    }
});

interface CaseContentParamsI {
    caseid: string
}

const CaseContent = ({  }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { caseid } = useParams<CaseContentParamsI>();

    const name = useSelector(caseContentSelectors.name),
        avatar = useSelector(caseContentSelectors.avatar),
        price = useSelector(caseContentSelectors.price),
        items = useSelector(caseContentSelectors.items),
        loading = useSelector(caseContentSelectors.loading),
        opening = useSelector(caseContentSelectors.opening),
        resultItem = useSelector(caseContentSelectors.resultItem),
        showDrop = useSelector(caseContentSelectors.showDrop),
        exists = useSelector(caseContentSelectors.exists),
        openError = useSelector(caseContentSelectors.openError);
    
    const openText = opening ? 'Opening...' : openError ? openError : `Open: ${price} bucks`;

    useEffect(() => {
        dispatch(setCaseContentTC(caseid));

        return () => {
            dispatch(setOpenErrorAC(''));
        }
    }, []);

    const handleOpen = (event?: any) => {
        dispatch(openCaseTC(caseid));
    }
    // const openHandler = opening ? null : openError ? null : handleOpen;

    const handleShowDrop = (show?: boolean) => {
        dispatch(showDropTC(show));
    }

    const stopOpenCase = () => {
        dispatch(stopOpenCaseTC());
    }

    return !exists ?
    <Error error={'Case does not exist.'} />
    :
    loading ?
    <LoadingComponent />
    :
    <>
        <Grid item className={classes.main} xl={8} md={9} sm={10} xs={12} >
            <Typography className={classes.caseName} variant='h3' color='primary'>{name}</Typography>
            {showDrop && <Drop item={resultItem} />}
            {showDrop ? null : opening ?
            <Roulette setShowDrop={handleShowDrop} stopOpenCase={stopOpenCase} items={items} drop={resultItem} />
            :
            <Card className={classes.card}>
                <CardActionArea disableRipple>
                    <CardMedia className={classes.caseImg} image={avatar} />
                </CardActionArea>
            </Card>
            }
            {!opening && !showDrop && <Button onClick={handleOpen} className={classes.openBt} variant='contained' color='primary' >{openText}</Button>}
        </Grid>

        <Grid container item className={classes.items} xl={8} md={9} sm={10} xs={12} >
             {items.map(item => <CaseItem {...item} key={item.id} />)}
        </Grid>
    </>
}

export default CaseContent;