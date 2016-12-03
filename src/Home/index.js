import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
class Home extends React.Component {
  render () {
    return(
      <div className="home-wrap">
        <div className="home-cover">
          <div className="home-item">
            <h3>HI, I'M QIEKX</h3>
            <p>WEB DEVELOPER</p>
            <RaisedButton label="HIRE ME" primary={true}  href="https://Qiekx.github.io"  />
          
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
