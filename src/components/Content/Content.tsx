import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import Case from './Case/Case';
import { useDispatch, useSelector } from 'react-redux';
import { setCasesTC } from '../../store/reducers/mainContentReducer/mainContenActions';
import mainContentSelectors from '../../store/reducers/mainContentReducer/mainContentSelectors';

const useStyles = makeStyles({
    container: {
        marginTop: 0
    },
});

interface PropsI {
}

const Content: React.FC<PropsI> = ({  }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const cases = useSelector(mainContentSelectors.cases);

    useEffect(() => {
        dispatch(setCasesTC());
    }, []);

    return <Grid className={classes.container} container>
        <Grid item xl={2}  md={1} sm={1} xs={false}></Grid>{/*sidebar*/}

        <Grid item xl={8}  md={10} sm={10} xs={12}>
            {cases.map((currentCase) => <Case {...currentCase} key={currentCase._id} />)}
        </Grid>

        <Grid item xl={2} md={1} sm={1} xs={false}></Grid>{/*sidebar*/}
    </Grid>
}

export default Content;