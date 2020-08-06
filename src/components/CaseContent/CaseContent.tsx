import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Typography, CardActionArea, CardMedia, Button, Card, makeStyles } from '@material-ui/core';
import { RootState } from '../../store/store';
import CaseItem from './CaseItem/CaseItem';
import { setCaseContentTC, openCaseTC, stopOpenCaseTC, showDropTC } from '../../store/reducers/caseContentReducer/caseContentActions';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import Roulette from './Roulette/Roulette';
import { CaseContentPropsI } from './CaseContentTypes';
import Drop from './Drop/Drop';

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

const CaseContent = ({ match: { params: { caseid } }, name, avatar, price, items, loading, opening, resultItem, showDrop, setCaseContent, openCase, stopOpenCase, showDropA }: CaseContentPropsI) => {
    const classes = useStyles();

    useEffect(() => {
        setCaseContent(caseid);
    }, []);

    const handleOpen = () => {
        openCase(caseid);
    }

    const handleShowDrop = (show?: boolean) => {
        showDropA(show);
    }

    return loading ?
    <LoadingComponent />
    :
    <>
        <Grid item className={classes.main} xl={8} md={9} sm={10} xs={12} >
            <Typography className={classes.caseName} variant='h3' color='primary'>{name}</Typography>
            {showDrop && <Drop setShowDrop={handleShowDrop} item={resultItem} />}
            {showDrop ? null : opening ?
            <Roulette setShowDrop={handleShowDrop} stopOpenCase={stopOpenCase} items={items} drop={resultItem} />
            :
            <Card className={classes.card}>
                <CardActionArea disableRipple>
                    <CardMedia className={classes.caseImg} image={avatar} />
                </CardActionArea>
            </Card>
            }
            {!opening && !showDrop && <Button onClick={opening ? null : handleOpen} className={classes.openBt} variant='contained' color='primary' >{opening ? 'Opening...' : `Open: ${price} bucks`}</Button>}
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
    loading: state.caseContent.loading,
    opening: state.caseContent.opening,
    resultItem: state.caseContent.resultItem,
    showDrop: state.caseContent.showDrop
})

export default withRouter(connect(mapStateToProps, { setCaseContent: setCaseContentTC, openCase: openCaseTC, stopOpenCase: stopOpenCaseTC, showDropA: showDropTC })(CaseContent))
