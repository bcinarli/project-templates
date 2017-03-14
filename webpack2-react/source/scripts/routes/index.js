/**
 * @author Bilal Cinarli
 */

'use strict';

import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../containers/app';

import * as Views from '../views';

const routes = (
    <Route component={App}>
        <IndexRoute component={Views.Home} />
        <Route path="/" component={Views.Home} />
    </Route>
);

const notFoundRoute = (
    <Route path="*" component={Views.NotFound} status="404" />
);

export {
    routes,
    notFoundRoute
}