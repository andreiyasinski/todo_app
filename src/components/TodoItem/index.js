import React, { Component } from 'react';

export default class TodoItem extends Component {
  render(props) {
    return (
      <div className='todo-item'>
        <input type="checkbox" checked={this.props.item.completed} />
        <p>{this.props.item.text}</p>
      </div>
    );
  }
}
