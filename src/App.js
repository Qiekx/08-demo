import React from 'react';

import NavHeader from './component/NavHeader'
import NavFooter from './component/NavFooter'
import LeftNav from './component/LeftNav'

import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      title:'Home',
      showLeftNav:false
    }
  }
  getChildContext(){
    return{muiTheme:getMuiTheme()};
  }
  componentWillReceiveProps(){
    this.setTitle()
  }
  componentWillMount(){
    this.setTitle();
    this.setNavBar();
  }
  componentDidMount(){
    window.onresize=this.setNavBar.bind(this)
  }
  setNavBar(){
    this.setState({
      showLeftNav:window.innerWidth>760?true:false
    })
  }

  setTitle(){
    this.setState({
      title:this.props.router.isActive('/',true) ? 'Home' :
            this.props.router.isActive('/blog',true) ? 'Blog' :
            this.props.router.isActive('/work',true) ? 'Work' :
            this.props.router.isActive('/about',true) ? 'About' : 'Blog'
    })
  }
  render () {
    return(
      <div className="my-wrap">
        {this.state.showLeftNav ? <LeftNav title={this.state.title}/> : <NavHeader title={this.state.title} />}
        <div className="main" >
          {this.props.children}
        </div>

        {this.state.showLeftNav ? null : <NavFooter/>}
      </div>
    )
  }
}
App.childContextTypes={
  muiTheme:React.PropTypes.object
};

export default App;
