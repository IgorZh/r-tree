import { NODE_REMOVE_CHILD, NODE_ADD_CHILD } from '../consts'

export default (state = [], action) => {
  switch (action.type) {
    case NODE_ADD_CHILD:
      return [ ...state, action.childId ];
    case NODE_REMOVE_CHILD:
      return state.filter(id => id !== action.childId);
    default:
      return state;
  }
}