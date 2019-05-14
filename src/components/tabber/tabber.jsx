import React from 'react';
import { BrowserRouter, NavLink, Switch, Route, Redirect } from 'react-router-dom';
import '../../assets/css/tabber.css';

class Tabber extends React.Component {
  render() {
    const { tabberConfig, activeClassName, className } = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() =>
            <Redirect to={tabberConfig[0].path}></Redirect>}>
          </Route>
          {tabberConfig.map((item, index) => {
            return <Route key={index} path={item.path} component={item.component} />
          })}
        </Switch>
        <div className="tabber-wrap">
          <ul className="clearfix">
            {
              tabberConfig.map((item, index) => {
                return <li
                  key={index}
                  style={{
                    width: `${100 / tabberConfig.length}%`
                  }}
                >
                  <NavLink
                    activeClassName={`active ${activeClassName}`}
                    className={`tabber-link ${className}`}
                    to={item.path}>
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
}

export default Tabber