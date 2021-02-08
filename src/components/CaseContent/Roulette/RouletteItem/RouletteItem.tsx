import React from 'react';
import { Card, CardActionArea, CardMedia, makeStyles } from '@material-ui/core';
import { bgStyles } from '../../CaseItem/Backgrounds';
import { CaseContentItemI } from '../../../../store/reducers/caseContentReducer/caseContentTypes';

const useStyles = makeStyles({
    itemImg: {
        width: 120,
        height: 90,
    },
    area: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 140
    },
    card: {
        width: 150,
        minWidth: 150,
    },
});

interface PropsI extends CaseContentItemI {

}

const RouletteItem: React.FC<PropsI> = ({ avatar, quality }) => {
    const bgColor = bgStyles[quality];
    const classes = useStyles();

    return <Card className={classes.card}>
        <CardActionArea disableRipple className={`${classes.area}`} style={bgColor} >
            <CardMedia className={classes.itemImg} image={avatar} />
        </CardActionArea>
    </Card>
}

export default RouletteItem;