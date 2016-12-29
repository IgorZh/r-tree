import deepFreeze from 'deep-freeze'

import * as actions from '../actions'
import nodeListReducer from './nodeList'

describe('nodeListReducer', () => {
  it('should handle NODE_CREATE action', () => {
    const nodeId = 2;
    const action = actions.createNode(nodeId);
    const state = { 1: { id: 1, name: 'first' } };

    const expectedState = {
      1: { id: 1, name: 'first' },
      [nodeId]: { id: nodeId },
    };

    deepFreeze(state);
    deepFreeze(action);

    expect(nodeListReducer(state, action)).toEqual(expectedState);
  });

  it('should handle NODE_UPDATE action', () => {
    const nodeId = 1;
    const action = actions.updateNode(nodeId, 'after');
    const state = {
      [nodeId]: { id: [nodeId], name: 'before' },
    };

    const expectedState = {
      [nodeId]: { id: [nodeId], name: 'after' },
    };

    deepFreeze(state);
    deepFreeze(action);

    expect(nodeListReducer(state, action)).toEqual(expectedState);
  });

  it('should handle NODE_ADD_CHILD action', () => {
    const parentId = 1, childId = 2;
    const action = actions.addChild(parentId, childId);
    const state = {
      [parentId]: { id: parentId, name: 'first' },
    };

    const expectedState = {
      [parentId]: { id: parentId, name: 'first', childIds: [childId] },
    };

    deepFreeze(state);
    deepFreeze(action);

    expect(nodeListReducer(state, action)).toEqual(expectedState);
  });

  it('should handle NODE_REMOVE_CHILD action', () => {
    const parentId = 1, childId = 2;
    const action = actions.removeChild(parentId, childId);
    const state = {
      [parentId]: { id: parentId, name: 'first', childIds: [childId] },
    };

    const expectedState = {
      [parentId]: { id: parentId, name: 'first', childIds: [] },
    };

    deepFreeze(state);
    deepFreeze(action);

    expect(nodeListReducer(state, action)).toEqual(expectedState);
  });

  it('should handle NODE_REMOVE_CHILD action', () => {
    const parentId = 1, childId = 2;
    const action = actions.removeChild(parentId, childId);
    const state = {
      [parentId]: { id: parentId, name: 'first', childIds: [childId] },
    };

    const expectedState = {
      [parentId]: { id: parentId, name: 'first', childIds: [] },
    };

    deepFreeze(state);
    deepFreeze(action);

    expect(nodeListReducer(state, action)).toEqual(expectedState);
  });

  it('should handle NODE_REMOVE action', () => {
    const nodeId = 1;
    const action = actions.removeNode(nodeId);
    const state = {
      [nodeId]: { id: nodeId, name: 'first' },
    };

    const expectedState = {};

    deepFreeze(state);
    deepFreeze(action);

    expect(nodeListReducer(state, action)).toEqual(expectedState);
  });

  it('should handle NODE_REMOVE action, delete with childs', () => {
    const nodeId = 2;
    const action = actions.removeNode(nodeId);
    const state = {
      1: { id: 1, name: 'first' },
      [nodeId]: { id: nodeId, name: 'second', childIds: [3, 4] },
      3: { id: 3, name: 'third' },
      4: { id: 4, name: 'fourth' },
    };

    const expectedState = {
      1: { id: 1, name: 'first' },
    };

    deepFreeze(state);
    deepFreeze(action);

    expect(nodeListReducer(state, action)).toEqual(expectedState);
  });
});