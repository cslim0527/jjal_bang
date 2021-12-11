import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { actionCreators as postActions } from '../redux/modules/post'
import { useDispatch, useSelector } from 'react-redux'

import {Grid} from '../elements'
import InfinityScroll from '../shared/InfinityScroll'
import MasonryPost from '../components/MasonryPost'

const PostList = (props) => {
  const dispatch = useDispatch()
  const post_data = useSelector(state => state.post)
  console.log('모든 데이터', post_data)

  const getPostList = () => {
    dispatch(postActions.getPostAction(post_data.page))
  }

  useEffect(() => {
    if (post_data.posts.length < 2) {
      dispatch(postActions.getPostAction(1))
    }
  }, [])

  return (
  <PostListWrap> 
    <InfinityScroll callNext={getPostList} paging={{next: post_data.has_next}}>
      <Grid is_container="is_container">
        <MasonryPost post_data={post_data.posts}/>
      </Grid>
    </InfinityScroll>
  </PostListWrap>
  )
}

export default PostList

const PostListWrap = styled.section`
  padding: 16px;
  padding-top: 100px;
`