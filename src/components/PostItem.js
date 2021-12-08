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
            <TitleWrap>
                <h5 style={{color:'white',marginBottom:'10px',wordBreak:'break-all'}}>{props.post.content}</h5>
            </TitleWrap>
            <IconWrap>
            <Icon>
                <BsFillBookmarkHeartFill color="white"/>
                <h6 style={{color:"white",marginLeft:"10px"}}>8</h6></Icon>
            <Icon><BsFillChatFill color="white"/><h6 style={{color:"white",marginLeft:"10px"}}>8</h6></Icon>
            <Icon><BsFillEyeFill color="white"/><h6 style={{color:"white",marginLeft:"10px"}}>8k</h6></Icon>
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
    max-width: 313.5px;
`
const PostTitleWrap = styled.div`
    background-color: #474a51;
    margin-top: 0px;
    width: 100%;
    padding: 10px 15px 10px 15px;
    transition: white;
    bottom: 0px;
    left: 0px;
    border-radius: 0 0 5px 5px;
    
    img{
        width: 100%;
    }

`
const IconWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0px 20px 0px 20px;
`
const TitleWrap = styled.div`
    text-align: center;
`
const Icon = styled.div`
    display: flex;
`
