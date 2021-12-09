import React, { useState } from 'react';
import styled from 'styled-components'
import {BsFillBookmarkHeartFill, BsFillChatFill, BsFillEyeFill} from 'react-icons/bs'

import { Grid } from '../elements';
import noImg from '../images/no-image.png'

const PostItem = (props) => {
    return (
        <PostCard>
            <PostTitleWrap>
                <img src={props.post.img} alt=""/>
                <IconWrap>
                    <Icon>
                        <BsFillBookmarkHeartFill />
                        <span className="count-txt">8</span>
                    </Icon>
                    <Icon>
                        <BsFillChatFill />
                        <span className="count-txt">8</span>
                    </Icon>
                    <Icon>
                        <BsFillEyeFill />
                        <span className="count-txt">8k</span>
                    </Icon>
                </IconWrap>
            </PostTitleWrap> 
        </PostCard>
    );
};

PostItem.defaultProps = {
    post: {
        img: noImg,
    } 
}

export default PostItem;

const PostCard = styled.div`
    background: linear-gradient(165deg, rgb(105, 216, 202) 0%, rgb(53, 146, 255) 50%, rgb(156, 49, 255) 100%);
    position: relative;
    border-radius: 5px;
    cursor: pointer;
    /* max-width: 313.5px; */
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
    }

`
const IconWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px 16px 5px 16px;

`
const TitleWrap = styled.div`
    text-align: center;
`
const Icon = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    cursor: pointer;
    color: #b4b9c2;
    transition: color 0.2s;

    &:hover {
        color: #fff;
    }
    
    .count-txt {
        margin-left: 5px;
    }
`
