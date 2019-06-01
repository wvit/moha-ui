import React from "react"
import Shade from '../shade/shade.jsx'

//样式
const menuBarContainerStyle = {
  position: 'absolute',
  right: 0,
  top: 0,
  width: '75%',
  height: '100vh',
  overflowY: 'scroll',
  background: '#fff',
  padding: '10px',
  boxSizing: 'border-box'
}

class Sidebar extends React.Component {
  render() {
    const { children, visible } = this.props;
    const animationDuration = { animationDuration: '200ms' };
    return (
      <Shade
        className='menuBar-wrap'
        visible={visible}
        onClose={this.props.onClose}
        style={animationDuration}
      >
        <div
          className={`menuBar-container ${visible ? 'fadeInRight' : 'fadeOutRight'}`}
          style={Object.assign({}, menuBarContainerStyle, animationDuration)}
          onClick={ev => { ev.stopPropagation() }}
        >
          {children}
        </div>
      </Shade>
    )
  }
}

export default Sidebar