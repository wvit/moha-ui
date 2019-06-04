import React from 'react'
import Shade from '../shade/shade.jsx'
import './dialog.css'

class Dialog extends React.Component {
  render() {
    //传参
    const { title = '提示', children, visible } = this.props;
    const animationDuration = { animationDuration: '200ms' };
    return (
      <Shade
        className='dialog-wrap'
        visible={visible}
        onClose={this.props.onClose}
        style={animationDuration}
      >
        <div className={`dialog ${visible ? 'fadeInDown' : 'fadeOutDown'}`} style={animationDuration} onClick={ev => { ev.stopPropagation() }}>
          <div className="clearfix dialog-head">
            <p className="title-text">{title}</p>
            <span className="close icon icon-close" onClick={this.props.onClose}></span>
          </div>
          <div className="clearfix dialog-body">
            {children}
          </div>
          <div className="clearfix dialog-foot">
            <div>
              <span onClick={this.props.onClose}>取消</span>
              <span onClick={this.props.onAffirm}>确认</span>
            </div>
          </div>
        </div>
      </Shade>
    )
  }
}

export default Dialog