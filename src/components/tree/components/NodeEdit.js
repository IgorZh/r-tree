import React, { Component, PropTypes } from 'react'

export default class NodeEdit extends Component {
  state = { isOpen: false };

  handleToggleClick = (e) => {
    e.preventDefault();

    this.setState({ isOpen: !this.state.isOpen });
  };

  handleBlur = (e) => {
    const { onCancelEdit } = this.props;
    onCancelEdit(e);
  };

  handleKeyPress = (e) => {
    const { onEndEdit } = this.props;

    if (e.charCode == 13)
      onEndEdit(e);
  };

  render() {
    const { name, isLeaf, children } = this.props;
    const { onEndEdit } = this.props;

    const editor = (
      <div className="editable-content">
        <span>{name}</span>
        <div className="editable-input">
          <input autoFocus="true"
                 className="inp"
                 type="text"
                 defaultValue={name}
                 onBlur={this.handleBlur}
                 onKeyPress={this.handleKeyPress}
          />
          <i className="editable-sbmt lnr lnr-checkmark-circle" onClick={onEndEdit}/>
        </div>
      </div>);

    return (
      <div className={`${isLeaf ? 'editable' : 'tree-node'} ${this.state.isOpen ? 'open' : ''}`}>
        {!isLeaf &&
        <i className="lnr lnr-chevron-right" onClick={this.handleToggleClick}/>
        }
        {!isLeaf
          ? <div className="tree-node-content editable">
            {editor}
          </div>
          : editor}
        {!isLeaf &&
        <ul>{children}</ul>
        }
      </div>
    );
  }
}

