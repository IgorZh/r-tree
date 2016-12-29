import React, { Component, PropTypes } from 'react'

export default class NodeEdit extends Component {
  state = { isOpen: false };

  static propTypes = {
    name: PropTypes.string,
    isLeaf: PropTypes.bool.isRequired,
    onCancelEdit: PropTypes.func.isRequired,
    onEndEdit: PropTypes.func.isRequired,
  };

  handleToggleClick = (e) => {
    e.preventDefault();

    this.setState({ isOpen: !this.state.isOpen });
  };

  handleBlur = (e) => {
    e.preventDefault();
    const currentTarget = e.currentTarget;

    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        const { onCancelEdit } = this.props;
        onCancelEdit();
      }
    }, 0);
  };

  handleKeyPress = (e) => {
    const { onEndEdit } = this.props;

    if (e.charCode === 13)
      onEndEdit(this.nameInput.value);
  };

  handleSaveClick = (e) => {
    e.preventDefault();
    const { onEndEdit } = this.props;

    onEndEdit(this.nameInput.value);
  };

  render() {
    const { name, isLeaf, children } = this.props;

    const editor = (
      <div className="editable-content">
        <span>{name}</span>
        <div tabIndex="1" className="editable-input" onBlur={this.handleBlur}>
          <input ref={(input) => { this.nameInput = input; }}
                 autoFocus="true"
                 className="inp"
                 type="text"
                 defaultValue={name}
                 onKeyPress={this.handleKeyPress}
          />
          <i className="editable-sbmt lnr lnr-checkmark-circle" onClick={this.handleSaveClick}/>
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

