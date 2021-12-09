import React from 'react'
import {Grid} from '../elements'
import PostItem from '../components/PostItem'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styled from 'styled-components'
import Masonry from 'react-masonry-css'
import { history } from '../redux/configureStore';

const PostList = (props) => {
  console.log(props.history)
  const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };
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
        <BackCl>
            <Canvas/>
            <Grid is_container="is_container">
                <Masonry
                      style={{cursor:"pointer"}}
                      onClick={()=>{history.push('/detail')}}
                      breakpointCols={breakpointColumnsObj}
                      className="my-masonry-grid"
                      columnClassName="my-masonry-grid_column">
                      {post_list.map((post, index)=> {
                      return <PostItem post={post} key={'post' + index}/>
                    })}
                </Masonry>
            </Grid>
        </BackCl>
    </PostListWrap>
    )
}
export default PostList;


const BackCl = styled.div `
  background-color: #2e3035;
`
const Canvas = styled.div `
  width: 100%;
  height: 100px;
  width: 100%;
  background-color: #171544;
`
const PostListWrap = styled.div`
  .my-masonry-grid {
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  margin-left: -30px; /* gutter size offset */
  width: auto;
}
.my-masonry-grid_column {
  padding-left: 10px; /* gutter size */
  background-clip: padding-box;
}

/* Style your items */
.my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
  background: grey;
  margin-bottom: 10px;
}
`