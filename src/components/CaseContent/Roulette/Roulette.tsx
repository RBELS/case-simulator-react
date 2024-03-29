import React, { Component, RefObject } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import RouletteItem from './RouletteItem/RouletteItem';
import { CaseContentItemI } from '../../../store/reducers/caseContentReducer/caseContentTypes';
import { WithStyles, createStyles } from '@material-ui/styles';

const styles = createStyles({
    roulette: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        margin: '53px 0px',
        height: 140
    },
    cursor: {
        width: '30px'
    }
});

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
        this.scrollSpeed = 40.2;
    }

    state = {
        stateItems: []
    }
    
    rouletteRef: RefObject<HTMLDivElement>;
    scroll: number;
    scrollSpeed: number;
    caseInterval: any;

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
        const move = Math.random()*156;
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
            const client: any = rouletteRef?.current?.clientWidth;

            //here
            if(rouletteRef?.current?.scrollLeft || rouletteRef.current?.scrollLeft === 0) {
                rouletteRef.current.scrollLeft = this.scroll;
            }
            //here
            this.scroll+=this.scrollSpeed;
            this.scrollSpeed -= client >= 800 ? 0.1 : 0.094;

            if(client && (this.scroll + client / 2 >= 8550+move || this.scrollSpeed <= 0)) {
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
            <img className={classes.cursor} src='http://localhost:5001/public/img/General/pointer.png' />
        </>
    }
}

export default withStyles(styles)(Roulette);