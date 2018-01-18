import React, {Component} from 'react';

class Option extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    this.props.clickedletter(event);
    this.setState({ disabled: true });
  }

  render() {
    return (
        <button
          className="key one"
          onClick={this.handleClick}
          value={this.props.letter}
          disabled={this.state.disabled}
          >
            {this.props.letter}
        </button>
    );
  }
}

export default Option;
