import React from 'react';
import { createBrowserHistory } from 'history'
import util from '../../assets/js/util.js'
import './title.css'

class Title extends React.Component {
  render() {
    const { titleName, className, children } = this.props;
    const history = createBrowserHistory();
    return (
      <div className="head-wrap">
        <div className="head-padding-box"></div>
        <div className={`head-title ${className}`} >
          <span className="head-back" onClick={() => { history.goBack() }}></span>
          <p className="head-text">
            {titleName}
          </p>
          <p className="title-other">
            {children}
          </p>
        </div>
      </div>
    )
  }
  //监听dom挂载完毕
  componentDidMount() {
    const box = util.query('.head-padding-box')[0];
    const head = util.query('.head-title')[0];
    box.style.height = head.offsetHeight + 'px';
  }
}

export default Title
