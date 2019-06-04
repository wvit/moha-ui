import React from 'react'
import './toolbar.css'

class Toolbar extends React.Component {
  render() {
    const { visible, children } = this.props;
    return (
      <div className="toolbar-wrap clearfix" style={{ left: visible ? '10px' : 'calc(100vw - 30px)' }}>
        <span className="show-btn icon icon-Left" style={{ transform: `rotate(${visible ? 180 : 0}deg)` }} onClick={this.props.onVisible}></span>
        <div className="toolbar clearfix">
          {children}
        </div>
      </div>
    )
  }
}

export default Toolbar  