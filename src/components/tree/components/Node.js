import React, { Component, PropTypes } from 'react'

export default class Node extends Component {
  state = { isOpen: false };

  handleToggleClick = (e) => {
    e.preventDefault();

    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { name, isLeaf, children } = this.props;
    const { onRemoveClick, onAddChildClick, onEditClick } = this.props;

    return (
      <div className={`${isLeaf ? 'editable' : 'tree-node'} ${this.state.isOpen ? 'open' : ''}`}>
        {!isLeaf &&
        <i className="lnr lnr-chevron-right" onClick={this.handleToggleClick}/>
        }
        <div className="tree-node-content editable">
          <span>{name}</span>
          <div className="editable-btns">
            <i className="editable-btns-edit lnr lnr-pencil" onClick={onEditClick}/>
            <i className="lnr lnr-cross" onClick={onAddChildClick}/>
            <i className="lnr lnr-trash" onClick={onRemoveClick}/>
          </div>
        </div>
        {!isLeaf &&
        <ul>{children}</ul>
        }
      </div>
    )
  }
}
