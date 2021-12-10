import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Masonry from 'react-masonry-css'

import {Grid} from '../elements'
import PostItem from '../components/PostItem'

const PostList = (props) => {
  const [post_list, setPostList] = useState([])

  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    700: 3,
    500: 2,
    425: 1
  }

  useEffect(() => {

  }, [])

  return (
  <PostListWrap> 
    <Grid is_container="is_container">
        <Masonry breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">

            {post_list.map((post, index)=> {
              return <PostItem post={post} key={'post' + index}/>
            })}

        </Masonry>
    </Grid>
  </PostListWrap>
  )
}

export default PostList

const PostListWrap = styled.div`
  padding: 16px;
  padding-top: 100px;

  .my-masonry-grid {
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  margin-left: -10px; /* gutter size offset */
  width: auto;
}
.my-masonry-grid_column {
  padding-left: 10px; /* gutter size */
  background-clip: padding-box;
}

/* Style your items */
.my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
  background: transparent !important;
  margin-bottom: 10px;
}
`