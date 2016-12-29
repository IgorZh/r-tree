import { NODE_EDIT_START, NODE_EDIT_END} from '../consts'

export default (state = null, action) => {
  switch (action.type) {
    case NODE_EDIT_START:
      return action.id;
    case NODE_EDIT_END:
      if(action.id !== state) console.log('trying of ending edit fot not editable node');
      return null;
    default:
      return state;
  }
}