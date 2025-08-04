import React, { Component } from 'react';

export default class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euro: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ rupees: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault(); 
    const euro = (this.state.rupees / 90).toFixed(2); 
    this.setState({ euro: euro });
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2>Currency Convertor</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Indian Rupees:</label>
          <input
            type="number"
            value={this.state.rupees}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Convert</button>
        </form>
        {this.state.euro && (
          <h3>Equivalent Euro: €{this.state.euro}</h3>
        )}
      </div>
    );
  }
}
