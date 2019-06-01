import React from 'react'
import util from '../../assets/js/util'

//样式
const defaultStyle = {
  position: 'fixed',
  left: 0,
  top: 0,
  background: 'rgba(0, 0, 0, 0.5)',
  width: '100vw',
  height: '100vh',
  zIndex: 999
}

class Shade extends React.Component {
  render() {
    const { className, visible, style, children, onClose } = this.props;
    this.showHide();
    return (
      <div
        className={`shade-wrap animated ${visible ? 'fadeIn' : 'fadeOut'} ${className}`}
        style={Object.assign({}, defaultStyle, style)}
        onClick={onClose}
      >
        {children}
      </div>
    )
  }
  //监听dom挂载完毕
  componentDidMount() {
    util.query('.shade-wrap')[0].style.display = this.props.visible ? 'block' : 'none';
  }
  //显示隐藏
  showHide() {
    const { className, visible } = this.props;
    const shadeWrap = util.query(`.${className}`)[0];
    if (!shadeWrap) return;
    setTimeout(() => {
      shadeWrap.style.display = visible ? 'block' : 'none';
    }, visible ? 50 : 300);
  }
}

export default Shade