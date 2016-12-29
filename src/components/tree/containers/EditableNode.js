import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { v4 } from 'node-uuid';

import Node from '../components/Node';
import NodeEdit from '../components/NodeEdit';
import { getNodeById, getEditingId } from '../reducers'
import * as actions from '../actions'


class EditableNode extends Component {
  handleAddChildClick = () => {

    const { addChild, createNode, startEditNode, id } = this.props;
    const childId = createNode(v4()).id;
    addChild(id, childId);
    startEditNode(childId);
  };

  handleRemoveClick = (e) => {
    e.preventDefault();

    const { removeNode, removeChild, id, parentId } = this.props;
    removeChild(parentId, id);
    removeNode(id);
  };

  handleEditClick = (e) => {
    e.preventDefault();

    const { startEditNode, id } = this.props;
    startEditNode(id);
  };

  handleEndEdit = (value) => {
    const { endEditNode, updateNode, removeNode, removeChild, id, parentId } = this.props;

    endEditNode(id);
    if (value.trim() === '') {
      removeChild(parentId, id);
      removeNode(id);
    }

    updateNode(id, value);
  };

  handleCancelEdit = () => {
    const { endEditNode, removeChild, removeNode, id, parentId, node } = this.props;

    if (node.name === undefined || node.name.trim() === '') {
      removeChild(parentId, id);
      removeNode(id);
    }

    endEditNode(id);
  };

  renderChild = node => {
    const { id } = this.props;

    if (node.childIds)
      return node.childIds.map(childId =>
        <li key={childId}>
          <ConnectedEditableNode id={childId} parentId={id}/>
        </li>
      );

    return <noscript/>
  };

  render() {
    const { isEditing, node } = this.props;
    const isLeaf = node.childIds === undefined || node.childIds.length === 0;


    if (node.isRoot)
      return (
        <div className="tree">
          <ul>
            {this.renderChild(node)}
          </ul>
          <a href="#!" className="btn" onClick={this.handleAddChildClick}>Добавить элемент</a>
        </div>
      );

    if (isEditing)
      return <NodeEdit name={node.name}
                       isLeaf={isLeaf}
                       onCancelEdit={this.handleCancelEdit}
                       onEndEdit={this.handleEndEdit}>
        {this.renderChild(node)}
      </NodeEdit>;
    else
      return <Node name={node.name}
                   isLeaf={isLeaf}
                   onAddChildClick={this.handleAddChildClick}
                   onRemoveClick={this.handleRemoveClick}
                   onEditClick={this.handleEditClick}>{this.renderChild(node)}</Node>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    node: getNodeById(state, ownProps.id),
    isEditing: getEditingId(state) === ownProps.id
  }
}

const ConnectedEditableNode = connect(mapStateToProps, actions)(EditableNode);
export default ConnectedEditableNode

