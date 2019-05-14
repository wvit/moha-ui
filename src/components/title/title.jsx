import React from 'react';
import { createBrowserHistory } from 'history'
import '../../assets/css/title.css'

class Title extends React.Component {
  render() {
    const { titleName, className } = this.props;
    const history = createBrowserHistory();
    return (
      <div className={`head-title ${className}`} >
        <span className="head-back" onClick={() => { history.goBack() }}></span>
        <p className="head-text">
          {titleName}
        </p>
      </div>
    )
  }
}

export default Title
