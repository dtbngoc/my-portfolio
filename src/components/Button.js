import React, { Component } from 'react'
import './Button.scss'

class Button extends Component {
  splitText() {
    return this.props.text.split('');
  }

  renderPart(text, index) {
    // replace spaces
    text = text.replace(/ /g, '\u00A0');
    return <span id={index}>{text}</span>;
  }

  render() {
    return (
      <div id={this.props.id} className='Link'>
        { this.splitText().map((text, i) => this.renderPart(text, i))}
      </div>
    );
  }

  

      

   
}

export default Button