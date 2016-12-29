import deepFreeze from 'deep-freeze'

import { startEditNode, endEditNode } from '../actions'
import editId from './editId'

describe('editReducer', () => {
  it('should init state', () => {
    const expectedState = null;

    expect(editId(undefined, {})).toEqual(expectedState);
  });

  it('should handle NODE_EDIT_START action', () => {
    const id = 1;
    const state = 2;
    const action = startEditNode(id);

    const expectedState = 1;

    deepFreeze(action);

    expect(editId(state, action)).toEqual(expectedState);
  });

  it('should handle NODE_EDIT_START action', () => {
    const id = 1;
    const state = 1;
    const action = endEditNode(id);

    const expectedState = null;

    deepFreeze(action);

    expect(editId(state, action)).toEqual(expectedState);
  });
});