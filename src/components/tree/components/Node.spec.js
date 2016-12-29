import React from 'react'
import { shallow } from 'enzyme'
import Node from './Node'

function setup(name, isLeaf) {
  const actions = {
    onAddChildClick: jest.fn(),
    onRemoveClick: jest.fn(),
    onEditClick: jest.fn()
  };

  const component = shallow(
    <Node name={name} isLeaf={isLeaf} {...actions} />
  );

  return {
    component: component,
    childList: component.findWhere(n => n.type() === 'ul'),
    nameCont: component.findWhere(n => n.type() === 'span'),
    actions: actions,
  }
}

describe('Node component', () => {
  it('should display name', () => {
    const name = 'name';
    const { nameCont } = setup(name, false);

    expect(nameCont.text()).toEqual(name);
  });

  it('should have child', () => {
    const { childList } = setup('', false);

    expect(childList.length).toBeGreaterThan(0);
  });

  it('shouldn`t have child', () => {
    const { childList } = setup('', true);

    expect(childList.length).toEqual(0);
  });
});