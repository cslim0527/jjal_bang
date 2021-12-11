import React, { useState,useEffect } from 'react'
import { useHistory, useLocation, useParams } from 'react-router'
import styled from 'styled-components'
import axios from 'axios'
import {userParams} from 'react-router'
import MasonryPost from '../components/MasonryPost'

import { Grid, Button } from '../elements'
import PostItem from '../components/PostItem'
import { getCookie } from '../shared/Cookie'

const MyPage = () => {
  const location = useLocation()
  const history = useHistory()
  const params = useParams()
  const user_id = getCookie('id')

  const [post_list, setPostList] = useState([])
  const getPostImg = () => {
    console.log(getCookie('id'))
    axios.post('http://13.209.85.96/api/users/myPostImgs',{"userID":getCookie('id')}).then(function(response){
      console.log(response.data)
      setPostList(response.data)
    })
  }

  useEffect(()=>{
    getPostImg()
  },[])

  const handleClickGoWrite = () => {
    history.push('/write')
  }

  return (
    <MyPageWrap>
      <div className="top-area">
        <Grid is_container height="258px" is_flex flex_align="center">
          <div className="user-profile">
            <div className="name">{user_id}</div>
            <div className="post-count">{post_list.length} 짤방</div>
          </div>
        </Grid>
        <Grid is_container>
          <ul className="cate-list">
            <li className="active" onClick={() => history.push('/user/posts/userid')}>
              내짤
            </li>
            <li onClick={() => history.push('/user/favorites/userid')}>
              북마크
            </li>
          </ul>
        </Grid>
      </div>

      <div className="bottom-area">
        <Grid is_container>
        {
          !post_list.length
            ? (
              <div className="no-post-area">
                <Button _onClick={handleClickGoWrite} _type="button" _className="write-btn" version="green">글쓰로 가기</Button>
                <div>여러분의 짤방을 공유해주세요!</div>
              </div>
            )
            : <MasonryPost post_data={post_list}/>

        }
        </Grid>
      </div>
    </MyPageWrap>
  )
}

const MyPageWrap = styled.section`
  .top-area {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://i.imgur.com/SzQGbZV_d.jpg?maxwidth=2560&fidelity=grand');
    background-size: cover;
    background-repeat: no-repeat;
    padding: 16px;
    
    .user-profile {
      margin-top: 60px;

      .name {
        font-size: 42px;
        margin-bottom: 10px;
      }

      .post-count {
        font-size: 14px;
      }
    }

    .cate-list {
      padding: 10px;
      display: flex;
      justify-content: center;

      li {
        color: #ccc;
        cursor: pointer;
        padding: 10px 20px;

        &:hover {
          color: #fff;
        }
      }

      .active {
        color: #fff;
        font-weight: bold;
      }
    }
  }

  .bottom-area {
    padding: 40px;

    .no-post-area {
      text-align: center;
    }

    .write-btn {
      margin-bottom: 20px;
    }
  }
`

export default MyPage