import React from 'react'

class Home extends React.Component {
  render () {
    return(
      <div className="home-wrap">
        <div className="home-cover">
          <div className="home-item">
            <h3>HI, I'M QIEKX</h3>
            <p>WEB DEVELOPER</p>
            <button type="button" className="btn btn-primary">
              <a href="http://Qiekx.github.io" style={{color:'#fff'}}>HIRE ME</a>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
