import React, { PropTypes } from 'react'
class ShowGit extends React.Component {
  render () {
    let info = this.props.gitInfo
    let styles = {
      img:{
        width: '100%',
        borderRadius:'50%',
        maxWidth:'130px',
        boxShadow:'rgba(0, 0, 0, 0.55) 0px 3px 10px',
      }
    };
    console.log(this.props.gitInfo);
    return(
      <div>
        <img src={info.avatar_url} style={styles.img}/>
        <h3>{info.login}</h3>
        <div className="show-git">
          <p>followers<br/>{info.followers}</p>
          <p>following<br/>{info.following}</p>
          <p>public_repos<br/>{info.public_repos}</p>
        </div>
      </div>
    )

  }
}

export default ShowGit;
