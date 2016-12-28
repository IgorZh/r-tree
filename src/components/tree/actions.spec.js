import * as actionTypes from './consts'
import * as actions from './actions'

describe('addChild', () => {
  it('should return action object', () => {
    const parentId = 1, childId = 1;

    expect(actions.addChild(parentId, childId)).toEqual({
      type: actionTypes.NODE_ADD_CHILD,
      parentId,
      childId
    });
  })
});

describe('removeChild', () => {
  it('should return action object', () => {
    const parentId = 1, childId = 1;

    expect(actions.removeChild(parentId, childId)).toEqual({
      type: actionTypes.NODE_REMOVE_CHILD,
      parentId,
      childId
    });
  })
});

describe('createNode', () => {
  it('should return action object', () => {
    const id = 1;

    expect(actions.createNode(id)).toEqual({
      type: actionTypes.NODE_CREATE,
      id
    });
  })
});

describe('startEditNode', () => {
  it('should return action object', () => {
    const id = 1;

    expect(actions.startEditNode(id)).toEqual({
      type: actionTypes.NODE_EDIT_START,
      id
    });
  })
});

describe('endEditNode', () => {
  it('should return action object', () => {
    const id = 1;

    expect(actions.endEditNode(id)).toEqual({
      type: actionTypes.NODE_EDIT_END,
      id
    });
  })
});

describe('updateNode', () => {
  it('should return action object', () => {
    const id = 1, name = 'name';

    expect(actions.updateNode(id, name)).toEqual({
      type: actionTypes.NODE_UPDATE,
      id,
      name
    });
  })
});

describe('removeNode', () => {
  it('should return action object', () => {
    const id = 1;

    expect(actions.removeNode(id)).toEqual({
      type: actionTypes.NODE_REMOVE,
      id
    });
  })
});