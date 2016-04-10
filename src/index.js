import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import configureStore from './store/configureStore';
import routes from './routes';
// as per https://github.com/callemall/material-ui#react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
import initialState from './store/initialState'

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const history = useRouterHistory(createHashHistory)({ queryKey: false });
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
