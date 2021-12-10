import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { API } from '../shared/api'
import { useSelector } from 'react-redux'
import { getCookie } from '../shared/Cookie'

import { Grid } from '../elements'
import TagMaker  from '../components/TagMaker'
import ImageUploader from '../components/ImageUploader'
import ScaleLoader from "react-spinners/ScaleLoader"
import Permit from '../shared/Permit'

// TODO  비로그인시 접근불가하게 막을 것
const PostWrite = (props) => {
  const login_state = useSelector(state => state.user)
  const { history } = props
  const [spinner, setSpinner] = useState(false)
  const uploaderInputRef = useRef(null)
  const [upload_btn_disabled, setUploadBtnDisabled] = useState(true)
  const [fileObj, setFileObj] = useState(null)
  const [tags, setTag] = useState([])
  const [imgInfo, setImgInfo] = useState({
    name: '',
    url: ''
  })

  const handleClickCancelUpload = () => {
    uploaderInputRef.current.value = null
    setFileObj(null)
    setTag([])
    setImgInfo({
      name: '',
      url: ''
    })
  }

  const uploadImage = async () => {
    const image = new FormData()
    image.append('img', fileObj)
    
    try {
      const res = await API.post.imageUpload(image)
      console.log('이미지 업로드 성공', res)
      return { image_result: true, url: res.data.url }
    } 
    catch(err) {
      console.log('이미지 업로드 실패', err)
      return { image_result: false }
    }

  }

  const uploadTag = async (image) => {
    const tag_string = tags.map(tag => tag.word).join(' ')
    const tagObj = { description: tag_string, imgUrl: image, userID: login_state.user }

    try {
      const res = await API.post.postUpload(tagObj)
      console.log('태그 업로드 성공', res)
      return { tag_result: true }
    } 
    catch(err) {
      console.log('태그 업로드 실패', err)
      return { tag_result: false }
    }
  }

  const handleWritePost = async () => {
    if (!fileObj) {
      alert('이미지를 선택해주세요.')
      return
    }

    if (tags.length === 0) {
      alert('태그를 1개 이상 작성해주세요.')
      return
    }
    setSpinner(true)
    setUploadBtnDisabled(true)
    const { image_result, url } = await uploadImage()
    const { tag_result } = await uploadTag(url)

    if (!image_result || !tag_result) {
      alert('업로드 할 수 없습니다.')
    }

    setSpinner(false)
    setUploadBtnDisabled(false)
    history.push('/')
  }

  useEffect(() => {
    if (fileObj && tags.length) {
      setUploadBtnDisabled(false)
    } else {
      setUploadBtnDisabled(true)
    }
  }, [fileObj, tags, imgInfo])

  useEffect(() => {
    const user = getCookie('id')
    if (!user) {
      alert('잘못된 접근입니다.')
      history.goBack()
      return
    }
  }, [])

  
  return (
    <Permit>
      <Grid is_container>
        <WriteWrap>
          <div className="write-left">
            <ImageUploader ref={uploaderInputRef} imgPreviewState={{imgInfo, setImgInfo}} uploaderFileState={{fileObj, setFileObj}}/>
          </div>
          
          <div className="write-right">

            <div className="write-control pager">
              <div className="control-subject">짤방</div>
              <div className="control-content">
                <button type="button" className="btn back-btn" onClick={() => history.goBack()}>뒤로가기</button>
                <button type="button" className="btn upload-btn" onClick={handleWritePost} disabled={upload_btn_disabled}>
                  { spinner ? <ScaleLoader height={14} color="#fff"/> : '올리기' }
                </button>
              </div>
            </div>

            <div className="write-control">
              <div className="control-subject">이미지 정보</div>
              <div className="control-content">
                <div className="file-name">{ imgInfo.name === '' ? '파일명' : imgInfo.name }</div>
                <button onClick={handleClickCancelUpload} type="button" className="cancel-btn">업로드 취소</button>
              </div>
            </div>

            <div className="write-control">
              <div className="control-subject">태그설정</div>
              <div className="tag-guide">최소 1개 이상의 태그를 작성해주세요.</div>
              <div className="control-content">
                <TagMaker tagState={{tags, setTag}} />
              </div>
            </div>

          </div>
        </WriteWrap>
      </Grid>
    </Permit>
  )
}

const WriteWrap = styled.div`
  display: flex;
  padding: 40px;
  
  .write-left {
    width: 100%;
    max-width: 710px;
    margin-right: 24px;
    min-width: 400px;
  }

  .write-right {
    flex: 1;
    min-width: 345px;
  }

  .write-control {
    margin-bottom: 60px;

    .control-subject {
      margin-bottom: 10px;
    }

    .file-name,
    .tag-guide {
      color: #c2c2c2;
      font-size: 14px;
      margin-bottom: 5px;
      font-family: 'paybooc-Light';
    }

    .cancel-btn {
      cursor: pointer;
      color: #01b96b;
      border: 0;
      background: none;
      font-size: 12px;
      letter-spacing: -1px;

      &:hover {
        color: #00e081;
      }
    }
  }

  .pager {

    .control-content {
      display: flex;
    }

    .btn {
      cursor: pointer;
      border: 0;
      color: #fff;
      height: 48px;
      padding: 9px 36px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(345.02deg,#2fbe7c -1.87%,#3ad7c5 107.98%);

      &:first-child {
        margin-right: 10px;
        background: #585d6a;
      }
    }

    .upload-btn {
      &:disabled {
        opacity: 0.5;
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: block;
    padding: 16px;
    padding-bottom: 80px;
    
    .write-left {
      margin-bottom: 40px;
      min-width: initial;

      .preview-box {
        min-height: 300px;
      }
    }

    .pager {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      margin-bottom: 0;

      .control-subject {
        display: none;
      }

      .control-content {
        .btn {
          flex: 1;
        }
      }
    }
  }
`

export default PostWrite