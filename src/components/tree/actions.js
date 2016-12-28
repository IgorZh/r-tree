import { v4 } from 'uuid';

import * as actionTypes from './consts'

export const addChild = (parentId, childId) => ({
  type: actionTypes.NODE_ADD_CHILD,
  parentId,
  childId
});

export const removeChild = (parentId, childId) => ({
  type: actionTypes.NODE_REMOVE_CHILD,
  parentId,
  childId
});

export const createNode = (id) => ({
  type: actionTypes.NODE_CREATE,
  id
});

export const startEditNode = (id) => ({
  type: actionTypes.NODE_EDIT_START,
  id
});

export const endEditNode = (id) => ({
  type: actionTypes.NODE_EDIT_END,
  id
});

export const updateNode = (id, name) => ({
  type: actionTypes.NODE_UPDATE,
  id,
  name
});

export const removeNode = (id) => ({
  type: actionTypes.NODE_REMOVE,
  id
});