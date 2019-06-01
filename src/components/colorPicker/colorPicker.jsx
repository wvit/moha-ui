import React from 'react';
import { BlockPicker } from 'react-color-moha'
import './colorPicker.css'

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //弹出开关
      showOnOff: false,
    }
  };
  render() {
    //按钮大小和拾取器类型
    const { size, type = 'BlockPicker', color = 'red' } = this.props;
    return (
      <div>
        <div
          className={`colorPicker-btn ${size === 'small' ? 'btn-small' : 'btn-medium'}`}
          style={{ background: color }}
          onClick={this.showHideColorPicker.bind(this)}
        >
          <div className={`BlockPicker-wrap ${this.state.showOnOff ? type : ''}-wrap-show`}>
            <BlockPicker
              className="BlockPicker" color={color}
              onChange={this.props.onChange}
            />
          </div>
        </div>
      </div>
    )
  }
  //监听dom挂载完毕
  componentDidMount() {
    document.addEventListener('click', () => {
      this.setState({ showOnOff: false })
    })
  }
  //监听卸载
  componentWillUnmount() {
    this.setState = () => { };
  }
  //颜色选择器的显示与隐藏
  showHideColorPicker(ev) {
    ev.nativeEvent.stopImmediatePropagation()
    if (ev.target.classList.contains('colorPicker-btn')) {
      this.setState({ showOnOff: !this.state.showOnOff })
    }
  }
}

export default ColorPicker
