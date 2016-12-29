import { v4 } from 'node-uuid'

import * as actionTypes from '../consts'
import nodeReducer from './node'

function getAllChildIds(state, nodeId) {
  const node = state[nodeId];
  if (node.childIds === undefined)
    return [];
  return node.childIds.reduce((previousValue, childId) => (
    [...previousValue, childId, ...getAllChildIds(state, childId)]
  ), []);
}

const rootId = v4();
export default (state = { [rootId]: { id: rootId, isRoot: true}}, action) => {
  const { id } = action;

  switch (action.type) {
    case actionTypes.NODE_CREATE:
    case actionTypes.NODE_UPDATE:
      return {
        ...state,
        [id]: nodeReducer(state[id], action)
      };
    case actionTypes.NODE_ADD_CHILD:
    case actionTypes.NODE_REMOVE_CHILD:
      const { parentId } = action;

      return {
        ...state,
        [parentId]: nodeReducer(state[parentId], action)
      };
    case actionTypes.NODE_REMOVE:
      const newState = { ...state };

      const allChilsdIds = getAllChildIds(newState, id);
      delete newState[id];
      allChilsdIds.forEach(id => delete newState[id]);

      return newState;
    default:
      return state;
  }
}

export const getById = (state, id) => state[id];
export const getRootId = (state) => Object.values(state).find((node) => node.isRoot).id;
