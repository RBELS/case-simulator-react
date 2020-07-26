import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import Case from './Case/Case';
import { connect } from 'react-redux';
import { RootState } from '../../store/store';
import { setCasesTC } from '../../store/reducers/mainContentReducer';
import { CaseI } from '../../store/types/types';

const useStyles = makeStyles({
    container: {
        marginTop: 0
    },
});

interface PropsI {
    cases: Array<CaseI>,
    setCases: () => void
}

const Content = ({ cases, setCases }: PropsI) => {
    const classes = useStyles();

    useEffect(() => {
        setCases();
    }, []);

    return <Grid className={classes.container} container>
        <Grid item xl={2}  md={1} sm={1} xs={false}></Grid>{/*sidebar*/}

        <Grid item xl={8}  md={10} sm={10} xs={12}>
            {cases.map((currentCase) => <Case {...currentCase} key={currentCase._id} />)}
        </Grid>

        <Grid item xl={2} md={1} sm={1} xs={false}></Grid>{/*sidebar*/}
    </Grid>
}

const mapStateToProps = (state: RootState) => ({
    cases: state.main.cases
});

export default connect(mapStateToProps,{ setCases: setCasesTC })(Content);