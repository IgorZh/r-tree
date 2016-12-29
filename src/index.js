import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'

import reducer, { getRootNodeId } from './components/tree/reducers'
import EditableNode from './components/tree/containers/EditableNode'
import { getState, setState } from './localStorage'
import './index.css';

const persistedState = getState();
const logger = createLogger();
const store = createStore(reducer, persistedState, applyMiddleware(logger));

store.subscribe(() => setState({ nodeList: store.getState().nodeList }));

ReactDOM.render(
  <Provider store={store}>
    <div style={{ width: '400px', margin: '100px auto' }}>
      <EditableNode id={getRootNodeId(store.getState())}/>
    </div>
  </Provider>,
  document.getElementById('root')
);
