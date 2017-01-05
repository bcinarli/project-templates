/**
 * @author Bilal Cinarli
 */

'use strict';

import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {routes} from '../routes'

const Root = ({store}) => (
    <Provider store={store}>
        <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
            {routes}
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;