import React from 'react'
import { Link } from 'react-router'

class NavFooter extends React.Component {
  render () {
    return(
      <div className="nav-footer">
        <Link to='/' activeStyle={{color:'indigo'}} onlyActiveOnIndex={true}><span className="glyphicon glyphicon-home" aria-hidden="true"></span><br/>Home</Link>
        <Link to='blog' activeStyle={{color:'indigo'}}><span className="glyphicon glyphicon-bookmark" aria-hidden="true"></span><br/>Blog</Link>
        <Link to='work' activeStyle={{color:'indigo'}}><span className="glyphicon glyphicon-education" aria-hidden="true"></span><br/>Work</Link>
        <Link to='about' activeStyle={{color:'indigo'}}><span className="glyphicon glyphicon-user" aria-hidden="true"></span><br/>About</Link>
      </div>
    )
  }
}

export default NavFooter;
