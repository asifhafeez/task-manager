import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
  render () {
    return (
      <div className="Task" id="">
        {console.log("hello")}
        {this.props.description} {this.state.status}
        <br/>
        <button className="button" onClick={this.done}>Done!</button>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { status: ""}
    this.done = this.done.bind(this);
  }

  done() {
    this.setState({ status: "is done"})
  }
};

export default Task;
