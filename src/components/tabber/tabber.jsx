import React from 'react';
import { BrowserRouter, NavLink, Switch, Route, Redirect } from 'react-router-dom';
import util from '../../assets/js/util.js';
import '../../assets/css/tabber.css';

class Tabber extends React.Component {
  render() {
    const { tabberConfig: { iconType, selectedColor, list } } = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() =>
            <Redirect to={list[0].path}></Redirect>}>
          </Route>
          {list.map((item, index) => {
            return <Route key={index} path={item.path} component={item.component} />
          })}
        </Switch>
        <div className="tabber-wrap">
          <div className="tabber-padding-box"></div>
          <ul className="clearfix">
            {
              list.map((item, index) => {
                return <li
                  key={index}
                  style={{
                    width: `${100 / list.length}%`
                  }}
                >
                  <NavLink
                    className='tabber-link'
                    activeClassName='active'
                    style={{ background: selectedColor, lineHeight: iconType ? '16px' : '30px' }}
                    activeStyle={{ background: '#fff', color: selectedColor }}
                    to={item.path}>
                    {this.setTabberIcon(iconType, item)}
                    {item.name}
                  </NavLink>
                </li>
              })
            }
          </ul>
        </div>
      </BrowserRouter>
    )
  }
  //监听dom挂载完毕
  componentDidMount() {
    const box = util.query('.tabber-padding-box')[0];
    const wrap = util.query('.tabber-wrap ul')[0];
    box.style.height = wrap.offsetHeight + 'px';
  }
  //设置tabber icon
  setTabberIcon(iconType, item) {
    if (iconType === 'iconfont') {
      return (
        <span className={`tabber-iconfont ${item.className}`}></span>
      )
    } else if (iconType === 'image') {
      return (
        <span>
          <img className='tabber-icon' src={item.icon}></img>
          <img className='tabber-active-icon' src={item.activeIcon}></img>
        </span>
      )
    }
  }
}

export default Tabber