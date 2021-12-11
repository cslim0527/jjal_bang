import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Grid } from '../elements'
import axios from 'axios'
import { useParams } from 'react-router'

import MasonryPost from '../components/MasonryPost'

const PostUpload = () => {
    const params = useParams()
    console.log(params)
    const [postArray, setPostArray] = useState([])
    const getPostResult = () => {
        axios.post('http://13.209.85.96/api/posts/search/tag', {"description":params.keyword}).then(function(response){
            const post_result = response.data.result.search
            setPostArray(post_result)
        })
    }

    useEffect(()=>{
        getPostResult()
    },[params])


    return (
        <PostSearch>    
            <Grid is_container>
                <Grid _className="search-title">
                    '{ params.keyword }'에 대한 검색 결과
                </Grid>

                {
                    postArray.length
                        ? <MasonryPost post_data={postArray}/>  
                        : <Grid _className="no-result">검색 결과가 없습니다.</Grid>
                }
                
            </Grid> 
        </PostSearch>      
    );
};

export default PostUpload;

const PostSearch = styled.div`
    padding-top: 100px;

    .search-title {
        font-size: 24px;
        text-align: center;
        font-family: 'BMJUA';
        margin-bottom: 40px;
    }

    .no-result {
        width: 100%;
        text-align: center;
    }
`