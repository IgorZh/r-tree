import * as actionTypes from '../consts'
import childIdsReducer from './childIds'

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.NODE_CREATE:
      return {
         id: action.id
      };
    case actionTypes.NODE_UPDATE:
      return {
        ...state,
        name: action.name
      };
    case actionTypes.NODE_ADD_CHILD:
    case actionTypes.NODE_REMOVE_CHILD:
      return {
        ...state,
        childIds: childIdsReducer(state.childIds, action)
      };
    default:
      return state;
  }
}