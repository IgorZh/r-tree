import deepFreeze from 'deep-freeze'

import * as actions from '../actions'
import nodeReducer from './node'

describe('nodeReducer', () => {
  it('should init state', () => {
    const expectedState = {};

    expect(nodeReducer(undefined, {})).toEqual(expectedState);
  });

  it('should handle NODE_CREATE action', () => {
    const id = 1;
    const action = actions.createNode(id);

    const expectedState = { id };

    deepFreeze(action);

    expect(nodeReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle NODE_UPDATE action', () => {
    const id = 1, name = 'after';
    const action = actions.updateNode(id, name);
    const state = { id, name: 'before'};

    const expectedState = { id, name };

    deepFreeze(state);
    deepFreeze(action);

    expect(nodeReducer(state, action)).toEqual(expectedState);
  });
});