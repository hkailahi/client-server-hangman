import React, {Component} from 'react';

class KeyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: '',
      pressedLetters: new Set()
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress.bind(this));
  }

  handleClick = (event) => {
    this.props.clickedletter(event);
    this.setState({ disabled: true });
  }

  handleKeyPress = (event) => {
    if (event.key === this.props.letter) {
      if(!this.state.pressedLetters.has(event.key)) {
        console.log(event.key + ' was pressed! ')
        if (this.props.pressedletter(event)) {
          const prevPressedLetters = this.state.pressedLetters;
          this.setState({
            disabled: true,
            pressedLetters: new Set(prevPressedLetters.add(event.key))
          });
        }
      }
    }
  }

  render() {
    return (
      <button
        className="key one"
        onKeyPress={this.handleKeyPress}
        onClick={this.handleClick}
        value={this.props.letter}
        disabled={this.state.disabled}
        tabIndex="0"
        >
          {this.props.letter}
      </button>
    );
  }
}

export default KeyButton;
