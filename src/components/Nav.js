import React from 'react'
import Button from './Button'
import Menu from './Menu'


class Nav extends React.Component {
    constructor(props, context) {
        super(props, context);
       
        this.state = {
          visible: false
        };


        this.handleMouseDown = this.handleMouseDown.bind(this);
       
        this.toggleMenu = this.toggleMenu.bind(this);
      }

      handleMouseDown(e) {
        this.toggleMenu();
     
        console.log("clicked");
        e.stopPropagation();
      }
       
      toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
      }


    render() {
        return (
          <div className='menu'> 
              <div onMouseDown={this.handleMouseDown}>
                <div id={this.props.align} className='navigation'>
                    <div className='link-container' >
                        <Button text={this.props.name} id='on-black'/>
                        <Button text={this.props.name} id='on-black'/>
                    </div>
                </div>

           </div>

           <Menu handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible} align={this.props.align}>
          {this.props.children}
          </Menu>

          </div>
           
           

            
         
        );
      }
}

export default Nav