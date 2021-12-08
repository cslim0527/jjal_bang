import React from 'react'
import styled from 'styled-components'
import Masonry from 'react-masonry-css'

import {Grid} from '../elements'
import PostItem from '../components/PostItem'

const PostList = (props) => {

  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    700: 3,
    500: 2,
    425: 1
  }
  const post_list = [
    {
      img: 'https://dummyimage.com/300x400/000/fff',
      content: '무한도전 '
    },
    {
      img: 'https://dummyimage.com/300x600/000/fff',
      content: '마포대교는 무너졌냐'
    },
    {
      img: 'https://dummyimage.com/300x500/000/fff',
      content: '정형돈'
    },
    {
      img: 'https://dummyimage.com/300x400/000/fff',
      content: '유재석'
    },
    {
      img: 'https://dummyimage.com/300x600/000/fff',
      content: '박명수'
    },
    {
      img: 'https://dummyimage.com/300x500/000/fff',
      content: '정준하'
    },
    {
      img: 'https://dummyimage.com/300x400/000/fff',
      content: '황광희'
    },
    {
      img: 'https://dummyimage.com/300x600/000/fff',
      content: '양세형'
    },
    {
      img: 'https://dummyimage.com/300x500/000/fff',
      content: '조세호'
    }
  ]

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