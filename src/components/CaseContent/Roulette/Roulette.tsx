import React, { useEffect, useState, Component, Ref } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Card, Typography } from '@material-ui/core';
import RouletteItem from './RouletteItem/RouletteItem';
import { CaseContentItemI } from '../../../store/reducers/caseContentReducer/caseContentTypes';
import { WithStyles } from '@material-ui/styles';

const styles = {
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
};

interface PropsI extends WithStyles<typeof styles> {
    items: Array<CaseContentItemI>
    drop: CaseContentItemI
    stopOpenCase: () => void
    setShowDrop: (showDrop?: boolean) => void
}

interface RouletteState {
    stateItems: Array<CaseContentItemI>
}

class Roulette extends Component<PropsI, RouletteState> {

    constructor(props: PropsI) {
        super(props);
        this.rouletteRef = React.createRef();
        this.scroll = 0;
        this.scrollSpeed = 40;
    }

    state = {
        stateItems: []
    }
    
    rouletteRef;
    scroll: number;
    scrollSpeed: number;
    caseInterval;

    endOpening = (auto?: boolean) => {
        clearInterval(this.caseInterval);
        const { stopOpenCase, setShowDrop } = this.props;
        if(auto) {
            setTimeout(() => {
                stopOpenCase();
                setShowDrop(true);
            }, 500)
        } else {
            stopOpenCase();
        }
    }

    componentDidMount() {
        const { items, drop } = this.props;
        let newItems: Array<CaseContentItemI> = Array<CaseContentItemI>();
        for(let i = 0;i < 65;i++) {
            const random = Math.floor(Math.random() * items.length);
            newItems.push(items[random]);
        }
        newItems[57] = drop;
        this.setState({ stateItems: newItems });
        this.rouletteRef = React.createRef();

        this.caseInterval = setInterval(() => {
            const { rouletteRef } = this;
            const client = rouletteRef.current.clientWidth;

            rouletteRef.current.scrollLeft = this.scroll;
            this.scroll+=this.scrollSpeed;
            this.scrollSpeed-= client >= 800 ? 0.1 : 0.094;

            if(this.scroll + client / 2 >= 8628 || this.scrollSpeed <= 0) {
                this.endOpening(true);
            }
        }, 10);
    }

    componentWillUnmount() {
        this.endOpening();
    }

    render() {
        const { classes } = this.props;
        const { stateItems } = this.state;

        return <>
            <Card ref={this.rouletteRef} className={classes.roulette}>
                {stateItems.map((i, index) => <RouletteItem {...i} key={index} />)}
            </Card>
            <img className={classes.cursor} src='https://cdn4.iconfinder.com/data/icons/geomicons/32/672416-triangle-up-512.png' />
        </>
    }
}

export default withStyles(styles)(Roulette);