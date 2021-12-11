import React from 'react'
import styled from 'styled-components'
import { BsFillChatFill, BsFillEyeFill, BsHeartFill } from 'react-icons/bs'

import { BASE_URL } from '../shared/api'
import { history } from '../redux/configureStore'
import { useDispatch } from 'react-redux'
import { actionCreators as postActions } from '../redux/modules/post'
import { getCookie } from '../shared/Cookie'

import noImg from '../images/no-image.png'

const PostItem = React.memo((props) => {
    const dispatch = useDispatch()
    const { commentCnt, description, imgUrl, postLikeCnt, viewsCnt, _id } = props.post
    
    const handleClickPost = (_id) => {
        history.push(`/detail/${_id}`)
    }

    const handleClickBookMark = (_id) => {
        if (!getCookie('id')) {
            alert('로그인 후 사용가능합니다.')
            return
        }

        dispatch(postActions.likeChangeAction(_id))
    }

    const handleSearchTag = (tag) => {
        history.push(`/search/${tag}`)
    }

    return (
        <PostCard>
            <PostTitleWrap>
                <img src={BASE_URL + imgUrl} alt="" onClick={() => handleClickPost(_id)}/>
                <div className='tag-list'>
                {
                    description.split(' ').map((tag, idx) => <span key={`tag-word-${idx}`} onClick={() => handleSearchTag(tag)} className='tag-item'>{tag}</span>)
                }
                </div>
                <IconWrap>
                    <Icon className={ props.post.like ? "bookmark-btn active" : "bookmark-btn" } onClick={() => handleClickBookMark(_id)}>
                        <BsHeartFill />
                        <span className="count-txt">찜</span>
                    </Icon>
                    <Icon>
                        <BsFillChatFill />
                        <span className="count-txt">{commentCnt}</span>
                    </Icon>
                    <Icon>
                        <BsFillEyeFill />
                        <span className="count-txt">{viewsCnt}</span>
                    </Icon>
                </IconWrap>
            </PostTitleWrap> 
        </PostCard>
    );
})

PostItem.defaultProps = {
    post: {
        img: noImg,
    } 
}

export default PostItem;

const PostCard = styled.div`
    position: relative;
    border-radius: 5px;
    max-width: 245px;

    .tag-list {
        margin: 5px 0;
        font-size: 11px;
        font-family: initial;
        display: flex;
        flex-wrap: wrap;

        .tag-item {
            padding: 3px 7px 4px 7px;
            margin-right: 8px;
            border: 1px solid #ccc;
            border-radius: 12px;
            background-color: #313131;
            cursor: pointer;
        }
    }
`
const PostTitleWrap = styled.div`
    background-color: #474a51;
    margin-top: 0px;
    width: 100%;
    padding: 10px;
    transition: white;
    bottom: 0px;
    left: 0px;
    border-radius: 6px;
    
    img{
        width: 100%;
        cursor: pointer;
    }

`
const IconWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px 16px 5px 16px;

    .bookmark-btn {
        cursor: pointer;
    }

`
const TitleWrap = styled.div`
    text-align: center;
`
const Icon = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #b4b9c2;
    transition: color 0.2s;

    &:hover {
        color: #fff;
    }

    &.active {
        color: #6db931;
    }
    
    .count-txt {
        margin-left: 5px;
    }
`
