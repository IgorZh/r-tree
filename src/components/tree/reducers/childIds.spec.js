import deepFreeze from 'deep-freeze'

import { addChild, removeChild } from '../actions'
import childIdsReducer from './childIds'

describe('childReducer', () => {
  it('should init state', () => {
    const expectedState = [];

    expect(childIdsReducer(undefined, {})).toEqual(expectedState);
  });

  it('should handle NODE_ADD_CHILD action', () => {
    const parentId = 1, childId = 2;
    const state = [1];
    const action = addChild(parentId, childId);

    const expectedState = [1, 2];

    deepFreeze(state);
    deepFreeze(action);

    expect(childIdsReducer(state, action)).toEqual(expectedState);
  });

  it('should handle NODE_REMOVE_CHILD action', () => {
    const parentId = 1, childId = 2;
    const state = [1, 2];
    const action = removeChild(parentId, childId);

    const expectedState = [1];

    deepFreeze(state);
    deepFreeze(action);

    expect(childIdsReducer(state, action)).toEqual(expectedState);
  });
});