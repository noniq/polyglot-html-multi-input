import React, { Component, Fragment } from 'react';
import update from 'react-addons-update';

import Item from './item.jsx';

export default class MultiLineInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.originalValue.split(/\r?\n/),
      newItemValue: '',
    };
  }

  handleExistingItemChange = (index) => (e) => {
    this.setState(
      update(this.state, { items: { [index]: { $set: e.target.value } } })
    );
  }

  handleExistingItemDelete = (index) => (e) => {
    this.setState(
      update(this.state, { items: { $splice: [[index, 1]] }})
    );
    e.preventDefault();
  }

  handleNewItemKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      const {
        newItemValue,
      } = this.state;

      if (newItemValue.trim() !== '') {
        this.setState(
          update(this.state, { items: { $push: [newItemValue] }, newItemValue: { $set: '' } })
        );
      }
    }
  }

  render() {
    const {
      items,
      newItemValue,
    } = this.state;

    const {
      originalName,
    } = this.props;

    return (
      <Fragment>
        {
          items.map((item, index) => <Item key={index} value={item} onRemove={this.handleExistingItemDelete(index)} onChange={this.handleExistingItemChange(index)} />)
        }

        <input
          value={newItemValue}
          onChange={(e) => this.setState({ newItemValue: e.target.value })}
          onKeyPress={this.handleNewItemKeyPress}
        />

        <textarea
          value={items.concat(newItemValue).join('\n')}
          style={{ display: 'none' }}
          name={originalName}
          readOnly
        />
      </Fragment>
    );
  }
}
