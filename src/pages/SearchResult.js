import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Grid } from '../elements';
import axios from 'axios';
import PostItem from '../components/PostItem';
import { useParams } from 'react-router';

const PostUpload = () => {
    const params = useParams()
    console.log(params)

    const [postArray, setPostArray] = useState([])
    const getPostResult = () => {
        axios.post('http://13.209.85.96/api/posts/search/tag', {"description":params.keyword}).then(function(response){
            const post_result = response.data.result.search
            setPostArray(post_result)
            console.log(post_result)
            
        })
    }
    useEffect(()=>{
        getPostResult()
    },[params]);


    return (
        <Grid is_container="is_container">
            <PostSearch>    
               {
                postArray.map((post,idx) => {
                    const _post = {img : post.imgUrl}
                    return <PostItem post={_post} />
                }) 
               }   
            </PostSearch>      
        </Grid>
    );
};

export default PostUpload;

const PostSearch = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background: #2C2F34;
    justify-content: space-around;
    position: relative;
`