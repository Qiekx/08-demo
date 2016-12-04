import React from 'react';

import { Link } from 'react-router';

class LeftNav extends React.Component {
  render () {
    return(
      <div className="leftnav-wrap">
        <h3>Qiekx@{this.props.title}</h3>
        <Link to="/" activeStyle={{backgroundColor:'rgba(0,0,0,0.5)'}} onlyActiveOnIndex={true}><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link>
        <Link to="/blog" activeStyle={{backgroundColor:'rgba(0,0,0,0.5)'}}><span className="glyphicon glyphicon-bookmark" aria-hidden="true"></span>Blog</Link>
        <Link to="/work" activeStyle={{backgroundColor:'rgba(0,0,0,0.5)'}}><span className="glyphicon glyphicon-education" aria-hidden="true"></span>Work</Link>
        <Link to="/about" activeStyle={{backgroundColor:'rgba(0,0,0,0.5)'}}><span className="glyphicon glyphicon-user" aria-hidden="true"></span>About</Link>
      </div>
    )
  }
}

export default LeftNav;
