import React, { Component } from "react";
import "./Menu.css";
import Button from './Button'
 
class Menu extends Component {
  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
        <div id="flyoutMenu" className={visibility}>
            <div id={this.props.align} className='Navigation' onMouseDown={this.props.handleMouseDown}>
                <div className='link-container'>
                    <Button text='Close' id='on-white'/>
                    <Button text='Close' id='on-white'/>
                </div>
            </div>
            <div>
                {this.props.children}
            </div>
        </div>
    );
  }
}
 
export default Menu;