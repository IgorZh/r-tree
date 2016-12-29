import React, { Component, PropTypes } from 'react'

export default class Node extends Component {
  state = { isOpen: false };

  static propTypes = {
    name: PropTypes.string,
    isLeaf: PropTypes.bool.isRequired,
    onAddChildClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired
  };

  handleAddClick = (e) => {
    e.preventDefault();

    if(!this.state.isOpen)
      this.setState({ isOpen: true });

    const { onAddChildClick } = this.props;
    onAddChildClick();
  };

  handleEditClick = (e) => {
    e.preventDefault();

    const { onEditClick } = this.props;
    onEditClick();
  };

  handleRemoveClick = (e) => {
    e.preventDefault();

    const { onRemoveClick } = this.props;
    onRemoveClick();
  };

  handleToggleClick = (e) => {
    e.preventDefault();

    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { name, isLeaf, children } = this.props;

    return (
      <div className={`${isLeaf ? 'editable' : 'tree-node'} ${this.state.isOpen ? 'open' : ''}`}>
        {!isLeaf &&
        <i className="lnr lnr-chevron-right" onClick={this.handleToggleClick}/>
        }
        <div className="tree-node-content editable">
          <span onClick={this.handleToggleClick}>{name}</span>
          <div className="editable-btns">
            <i className="editable-btns-edit lnr lnr-pencil" onClick={this.handleEditClick}/>
            <i className="lnr lnr-cross" onClick={this.handleAddClick}/>
            <i className="lnr lnr-trash" onClick={this.handleRemoveClick}/>
          </div>
        </div>
        {!isLeaf &&
        <ul>{children}</ul>
        }
      </div>
    )
  }
}
