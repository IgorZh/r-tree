import * as actionTypes from '../consts'
import nodeReducer from './node'

function getAllChildIds(state) {
  return state.childIds.reduce((previousValue, childId) => (
      [...previousValue, childId, ...getAllChildIds(state[childId])]
    ), []);
}

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.NODE_CREATE:
    case actionTypes.NODE_UPDATE:
      const { id } = action;

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

      const allChilsdIds = getAllChildIds(newState[action.id]);
      delete newState[id];
      allChilsdIds.forEach(id => delete newState[id]);

      return newState;
    default:
      return state;
  }
}