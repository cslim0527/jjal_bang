import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import styled from 'styled-components'

import { Grid } from '../elements'
import PostItem from '../components/PostItem'

const MyPage = () => {
  const location = useLocation()
  const history = useHistory()
  console.log(location)

  const [post_list, setPostList] = useState([])

  const handleClickGoWrite = () => {
    history.push('/write')
  }

  return (
    <MyPageWrap>
      <div className="top-area">
        <Grid is_container height="258px" is_flex flex_align="center">
          <div className="user-profile">
            <div className="name">UserId</div>
            <div className="post-count">1 짤방</div>
          </div>
        </Grid>
        <Grid is_container>
          <ul className="cate-list">
            <li onClick={() => history.push('/user/posts/userid')}>
              내짤
            </li>
            <li className="active" onClick={() => history.push('/user/favorites/userid')}>
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
                <div>소장하고있는 짤방이 없습니다!</div>
              </div>
            )
            : post_list.map((post, idx) => <PostItem />)

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
      cursor: pointer;
      border: 0;
      color: #fff;
      padding: 7px 14px 10px 9px;
      height: 35px;
      border-radius: 3px;
      font-size: 14px;
      background-color: #1bb76e;
      margin-bottom: 20px;
    }
  }
`

export default MyPage