import React, { PropTypes } from 'react'
import marked from 'marked';
import axios from 'axios';

class Item extends React.Component {
  componentDidMount(){
    let address = this.props.params.title;
    axios.get(`https://raw.githubusercontent.com/Qiekx/08-demo/master/data/${address}.md`)
      .then( res => console.log(res))
  }
  render () {
    let content = this.props.params.title == 1 ? '这是第一个页面' :
    this.props.params.title == 2 ? '这是第二个页面' :
    this.props.params.title == 3 ? '这是第三个页面' :
    this.props.params.title == 4 ? '这是第四个页面' :
    this.props.params.title == 5 ? '这是第五个页面' :
    this.props.params.title == 6 ? '这是第六个页面' : '这是第n个页面'
    return(
      <div>
        {content}

      </div>
    )
  }
}

export default Item;
