import * as React from 'react';
//import {ArcSeries} from 'react-vis';
import Paper from 'material-ui/Paper';
import { withStyles, WithStyles, Theme } from 'material-ui/styles';


import { Row } from '../../Layout/Row';
import { Column } from '../../Layout/Column';

interface DashBoardProps {
    classes: any;
    activeUser?: string;
}

const styles = (theme: Theme) => ({
    dashWrap: {
        padding: "5px",
    },
    columnWraps: {
        width: '100%',
        padding: '5px'
    }

})

class _DashBoard extends React.Component<DashBoardProps & WithStyles<keyof typeof styles>, never>{

    constructor(props: DashBoardProps) {
        super(props)
    }

    render() {
        const { classes } = this.props;
        return (
            <Row
                className={classes.dashWrap}
            >
                <Column
                    className={classes.columnWraps}
                >
                    <Paper>
                        <h2>Main DashBoard</h2>
                    </Paper>
                </Column>
                <Column
                    className={classes.columnWraps}
                >
                    <Paper>
                        <h2>Main 2 DashBoard</h2>
                    </Paper>
                </Column>
            </Row>
        )
    }
}

export const DashBoard = withStyles(styles)(_DashBoard);