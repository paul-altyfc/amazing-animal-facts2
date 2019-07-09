import React from 'react';

class FactAdder extends React.Component {
  state = {
    newFact: ''
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.newFact}
          onChange={this.handleChange}
        />
        <button type="submit">Add</button>
      </form>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addFact(this.state.newFact);
    this.setState({ newFact: '' });
  };

  handleChange = event => {
    this.setState({ newFact: event.target.value });
  };
}

export default FactAdder;
