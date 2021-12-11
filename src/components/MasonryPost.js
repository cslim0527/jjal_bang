import React from 'react'
import styled from 'styled-components'
import Masonry from 'react-masonry-css'

import PostItem from './PostItem'

const MasonryPost = (props) => {
  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    700: 3,
    500: 2,
    425: 1
  }

  return (
    <MasonryWrap>
      <Masonry breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {
            props.post_data.map((post, index)=> {
              return <PostItem post={post} key={'post' + index}/>
            })
          }
      </Masonry>
    </MasonryWrap>
  )
}

export default MasonryPost

const MasonryWrap = styled.div`

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

  @media screen and (max-width: 425px) {
    .my-masonry-grid_column > div {
      max-width: 100%;
    }
  }
`