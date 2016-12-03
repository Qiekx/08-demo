import React from 'react'

import BlogCard from '../component/BlogCard'
let data=

class Blog extends React.Component {
  render () {
    let cards=data.map( (item,i) =><BlogCard {...item} key={i} />)
    return(
      <div className="blog-wrap">
        {cards}
      </div>
    )
  }
}

export default Blog;
