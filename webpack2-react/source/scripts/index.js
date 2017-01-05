/**
 * @author Bilal Cinarli
 */

'use strict';

import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Redbox from 'redbox-react';

import {store} from './store';
import RootContainer from './containers/root';

const ROOT_NODE = document.getElementById('my-app');

let render = () => {
    ReactDOM.render(
        <AppContainer errorReporter={Redbox}>
            <RootContainer store={store} />
        </AppContainer>,
        ROOT_NODE
    );
};

if(__DEV__) {
    if(module.hot) {
        module.hot.accept('./containers/app', () =>
            setImmediate(() => {
                ReactDOM.unmountComponentAtNode(ROOT_NODE);
                render();
            })
        )
    }
}

render();