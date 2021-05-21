import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      message: ""
    };
  }
  
  handleMessage = e => {
    this.setState({
      message: e.target.value
    })
  }
  
  render() {
    let remainingChars = this.props.maxChars - this.state.message.length;

    return (
      <div>
        <strong>Your message: </strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={e => this.handleMessage(e)}
        />
        <p>You have {remainingChars} remaining characters.</p>
      </div>
    );
  }
}

export default TwitterMessage;
