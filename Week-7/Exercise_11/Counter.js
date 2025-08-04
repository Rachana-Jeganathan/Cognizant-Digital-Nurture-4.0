import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  sayHello() {
    console.log("Hello! You clicked Increment!");
  }

  handleIncrement() {
    this.increment();
    this.sayHello();
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  sayWelcome(message) {
    alert(message);
  }

  handleClick(event) {
    alert("I was clicked");
    console.log(event); 
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2>Counter Value: {this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>{' '}
        <button onClick={this.decrement}>Decrement</button>
        <br /><br />
        <button onClick={() => this.sayWelcome("Welcome!")}>Say Welcome</button>
        <br /><br />
        <button onClick={(event) => this.handleClick(event)}>OnPress Synthetic Event</button>
      </div>
    );
  }
}
