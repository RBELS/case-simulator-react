import React, { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Typography, CardActionArea, CardMedia, Button, Card, makeStyles } from '@material-ui/core';
import { RootState } from '../../store/store';
import CaseItem from './CaseItem/CaseItem';
import { CaseContentItemI } from '../../store/reducers/caseContentReducer/caseContentTypes';
import { setCaseContentTC } from '../../store/reducers/caseContentReducer/caseContentActions';
import LoadingComponent from '../LoadingComponent/LoadingComponent';

interface PropsI extends RouteComponentProps {
    match: {
        params: ParamsI
        isExact: boolean
        path: string
        url: string
    },
    loading: boolean
    name: string
    avatar: string
    price: number
    items: Array<CaseContentItemI>
    setCaseContent: (caseid: string) => void
}

interface ParamsI {
    caseid: string
}

const useStyles = makeStyles({
    main: {
        margin: '2px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
    item: {
        border: '1px solid black',
        backgroundColor: 'white',
        height: 156,
        borderRadius: 40
    },
    caseName: {
        fontWeight: 300
    }
});

const CaseContent = ({ match: { params: { caseid } }, name, avatar, price, items, loading, setCaseContent }: PropsI) => {
    const classes = useStyles();
    useEffect(() => {
        setCaseContent(caseid);
    }, []);


    return loading ?
    <LoadingComponent />
    :
    <>
        <Grid item className={classes.main} xl={8} md={9} sm={10} xs={12} >
            <Typography className={classes.caseName} variant='h3' color='primary'>{name}</Typography>
            <Card>
                 <CardActionArea disableRipple>
                     <CardMedia className={classes.caseImg} image={avatar}/>
                 </CardActionArea>
            </Card>
            <Button className={classes.openBt} variant='contained' color='primary' >Open: {price} bucks</Button>
        </Grid>

        <Grid container item className={classes.items} xl={8} md={9} sm={10} xs={12} >
             {items.map(item => <CaseItem {...item} key={item.id} />)}
        </Grid>
    </>
}

const mapStateToProps = (state: RootState) => ({
    name: state.caseContent.name,
    avatar: state.caseContent.avatar,
    price: state.caseContent.price,
    items: state.caseContent.items,
    loading: state.caseContent.loading
})

export default withRouter(connect(mapStateToProps, { setCaseContent: setCaseContentTC })(CaseContent))
