import { combineReducers } from 'redux';

import editId from './editId'
import nodeList, { getById, getRootId } from './nodeList'

const tree = combineReducers({
  editId,
  nodeList,
});

export default tree;

export const getNodeById = (state, id) => getById(state.nodeList, id);
export const getEditingId = (state) => state.editId;
export const getRootNodeId = (state) => getRootId(state.nodeList);