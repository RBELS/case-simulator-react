import React, { useEffect } from 'react';
import { Typography, Grid, Card, CardActionArea, CardMedia, Button } from '@material-ui/core';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import CaseItem from './CaseItem/CaseItem';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { RootState } from "../../store/store";
import { setCaseContentTC } from "../../store/reducers/caseContentReducer";
import { CaseContentItemI } from '../../store/types/types';

interface PropsI extends RouteComponentProps {
    match: {
        params: ParamsI
        isExact: boolean
        path: string
        url: string
    },
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
        // height: 100,
        margin: "2px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
        margin: "2px auto"
    },
    item: {
        border: "1px solid black",
        backgroundColor: "white",
        // width: 156,
        height: 156,
        borderRadius: 40
    },
    caseName: {
        fontWeight: 300
    }
});

const CaseContent = ({ match: { params: { caseid } }, name, avatar, price, items, setCaseContent }: PropsI) => {
    const classes = useStyles();

    useEffect(() => {
        console.log("Effect")
        setCaseContent(caseid);
    }, []);
    // const image = avatar ? avatar : "";

    console.log(caseid);
    return <>
        <Grid item className={classes.main} xl={8} md={9} sm={10} xs={12} >
            <Typography className={classes.caseName} variant="h3" color="primary">{name}</Typography>
            <Card>
                <CardActionArea disableRipple>
                    <CardMedia className={classes.caseImg} image={avatar}/>
                </CardActionArea>
            </Card>
            <Button className={classes.openBt} variant="contained" color="primary" >Open: {price} bucks</Button>
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
    items: state.caseContent.items
})

export default compose(
    withRouter,
    connect(mapStateToProps, { setCaseContent: setCaseContentTC })
)(CaseContent)