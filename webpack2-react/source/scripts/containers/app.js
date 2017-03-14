/**
 * @author Bilal Cinarli
 */

'use strict';

import React from 'react';
import {connect} from 'react-redux';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div id="wrapper" className="page-wrapper">
                <header id="masthead" className="page-header" />

                <div id="content" className="page-content">
                    <aside className="page-sidebar" />

                    <div id="main" className="page-main">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

const MapStatesToProps = (store) => ({});

export default connect(MapStatesToProps)(App);