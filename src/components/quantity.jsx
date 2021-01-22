import React from 'react';

class Quantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.change = this.change.bind(this);
  }

  increase(e) {
    e.preventDefault();
    const { value } = this.state;
    this.setState({ value: value + 1 });
  }

  decrease(e) {
    e.preventDefault();
    const { value } = this.state;
    if (value > 1) {
      this.setState({ value: value - 1 });
    }
  }

  change(e) {
    e.preventDefault();
    if (e.target.value > 0) {
      this.setState({ value: e.target.value });
    }
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <p>Quantity</p>
        <div>
          <button onClick={this.decrease} type="button">&mdash;</button>
          <input type="text" onChange={this.change} value={value} />
          <button onClick={this.increase} type="button">&#xff0b;</button>
        </div>
      </div>
    );
  }
}

export default Quantity;
