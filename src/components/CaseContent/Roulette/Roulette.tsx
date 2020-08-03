import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Card, Typography } from '@material-ui/core';
import RouletteItem from './RouletteItem/RouletteItem';
import { CaseContentItemI } from '../../../store/reducers/caseContentReducer/caseContentTypes';

const useStyles = makeStyles({
    roulette: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        margin: '30px 0px',
        height: 140
    },
    cursor: {
        width: '30px'
    }
});

interface PropsI {
    items: Array<CaseContentItemI>
}

const Roulette = ({ items }: PropsI) => {
    const classes = useStyles();

    const [ stateItems, setStateItems ] = useState<Array<CaseContentItemI>>([]);

    useEffect(() => {
        const newItems: Array<CaseContentItemI> = Array<CaseContentItemI>();
        for(let i = 0;i < 50;i++) {
            const random = Math.floor(Math.random() * items.length);
            newItems.push(items[random]);
        }
        setStateItems(newItems);
    }, []);

    return <>
        <Card className={classes.roulette}>
            {stateItems.map(i => <RouletteItem {...i} key={i.id} />)}
        </Card>
        <img className={classes.cursor} src='https://cdn4.iconfinder.com/data/icons/geomicons/32/672416-triangle-up-512.png' />
    </>
}

export default Roulette;