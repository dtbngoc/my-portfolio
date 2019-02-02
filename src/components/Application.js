import React from 'react'
import styled from 'styled-components'





class Application extends React.Component {
    constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }
  _onMouseMove(e) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }
  render() {
    const Div = styled.div`
      margin: 100px 100px;
      font-family: 'Overpass Mono';
      font-size: 20px;
      transform: rotateY(-10.27deg) rotateX(4.193deg) rotateZ(0deg) scale(1.03);
  `;

    const { x, y } = this.state;

    return  <Div>
              
                <img onMouseMove={this._onMouseMove.bind(this)} width="400" height="600" src="http://www.mariogiannini.com/wp-content/uploads/2017/10/Photo-200x300.jpg"/>
              
              <div>{ x } { y }</div><br/>
            </Div>;
  }
  }
  
  /*
   * Render the above component into the div#app
   */
//   React.render(<Application />, document.getElementById('app'));


export default Application