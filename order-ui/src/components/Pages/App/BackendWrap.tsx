import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';

import * as RouterActions from '../../../actions/RouterActions';
import TopBar from '../Backend/TopBar';
import SideBar from '../Backend/Sidebar';


interface BackendWrapProps {
    children?: any;
}

export class BackendWrap extends React.Component<BackendWrapProps, never>{
    constructor(props: BackendWrapProps) {
        super(props);
    }

    render() {
        return (
            <div className="appWrap">
                <TopBar classes={{}} />
                <SideBar classes={{}} />
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    state: state.Activeuser,
});

const mapDispatchToProps = (dispatch: any) => ({
    changeLocation: Redux.bindActionCreators(RouterActions.push, dispatch),
});

const mergeProps = (stateProps: Object, dispatchProps: Object, ownProps: Object) => {
    return { ...ownProps, ...stateProps, ...dispatchProps };
};

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps, mergeProps)(BackendWrap);