import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer, { getRootNodeId } from './components/tree/reducers'
import EditableNode from './components/tree/containers/EditableNode'
import { getState, setState } from './localStorage'
import App from './App';
import './index.css';

const persistedState = getState();
const store = createStore(reducer, persistedState);

store.subscribe(() => setState({ nodeList: store.getState().nodeList }));

ReactDOM.render(
  <Provider store={store}>
    <div style={{ width: '400px', margin: '100px auto' }}>
      <EditableNode id={getRootNodeId(store.getState())}/>
    </div>
  </Provider>,
  document.getElementById('root')
);
