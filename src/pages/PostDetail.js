import React from 'react';
import styled from 'styled-components'
import {useState} from 'react';
import {BiTrash} from 'react-icons/bi'
import axios from 'axios';

const PostDetail = (props) => {
    const [names, setNames] = useState([
    ]);
    // 더미데이터를 지정해줬다.
    const [inputText, setInputText] = useState("");
    const [nextId, setNextId] = useState("");
    // usestate로 변수 배열을 만들어줬다.

    const onChange = (e) => setInputText(e.target.value);
    // e.target.value가 names에 들어간다. (키보드를 입력할때마다.)

    const onClick = () => {
        const nextNames = names.concat({id: nextId, text: inputText});
        console.log(nextNames)
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText(""); // 입력후 리셋(빈 건 아니다)
    };
    const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);
    
    


    return (
        <PostWrap>
            <PostChartWrap>
                <PostTitle>
                    <PostIcon>
                    <p
                        style={{
                            color: "white"
                        }}>안녕하세요</p>
                    <h6
                        style={{
                            color: "white"
                        }}>userId</h6> 
                        <BiTrash style={{color:"white"}}/>
                        </PostIcon>
                    <UserPoster/> 
                </PostTitle>
                <PostChartWrap1>
                    <SubChart>NEWEST IN MOST VIRAL</SubChart>
                    <hr/>
                    <PostChart/>
                    <PostChart/>
                    <PostChart/>
                    <PostChart/>
                    <PostChart/>
                </PostChartWrap1>
            </PostChartWrap>

            <CommentPostwrap>
                <CommentBtnwrap>
                    <PostCommentInput
                        value={inputText}
                        onChange={onChange}
                        type="text"
                        placeholder='Write a comment'/>
                    <CommentBtn onClick={onClick}>Post</CommentBtn>
                </CommentBtnwrap>
                <div style={{display:'flex',justifyContent:'center'}}>
                <UserComment>
                    <UserComments>{nameList}</UserComments>
                </UserComment>
                </div>
            </CommentPostwrap>
        </PostWrap>
    );
};

export default PostDetail;

const PostWrap = styled.div `
`
const UserPoster = styled.div `
    width: 600px;
    height: 400px;
    background: black;
    margin-top: 20px;
    
`
const PostCommentInput = styled.input `
    min-height: 90px;
    background-color: #33353b;
    padding: 12px;
    border-radius: 6px 6px 0 0;
    width: 100%;
 `
const CommentBtnwrap = styled.div `
    display: flex;
    justify-content: center;
    width: 850px;
    margin: 0 auto;
    
`
const CommentPostwrap = styled.div `
    margin-top: 100px;
    
`
const CommentBtn = styled.button `
    color: #b4b9c2;
    background: #464b57;
    cursor: default;
    width: 20%;
    align-self: flex-end;

`
const UserComment = styled.div `
    background: #474a51;
    display: flex;
    justify-content: left;
    width: 850px;
    
`
const SubChart = styled.p `
    color: white;
    margin-top: 50px;
    width: 100%;
`
const PostChart = styled.div `
    width: 64px;
    height: 64px;
    background: black;
    
`
const PostChartWrap = styled.div `
    display: flex;
    justify-content: center;
    

`
const PostChartWrap1 = styled.div `
    display: flex;
    width: 200px;
    padding-left: 40px;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
    position: -webkit-sticky;
    position: sticky;
    top: 20px;
    margin-top: 50px;

`
const UserComments = styled.li `
    color: white;
`
const PostTitle = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 65px;
`
const PostIcon = styled.div`
    display: flex;
    justify-content: space-between;
`