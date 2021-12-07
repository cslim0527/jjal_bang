import React, { useState } from 'react'
import styled from 'styled-components'

import { Grid } from '../elements'
import TagMaker  from '../components/TagMaker'
import ImageUploader from '../components/ImageUploader'

const PostWrite = () => {
  const [upload_btn_disabled, setUploadBtnDisabled] = useState(true)

  return (
    <Grid is_container>
      <WriteWrap>
        <div className="write-left">
          <ImageUploader setUploadBtnDisabled={setUploadBtnDisabled} />
        </div>
        
        <div className="write-right">

          <div className="write-control pager">
            <div className="control-subject">짤방</div>
            <div className="control-content">
              <button type="button" className="btn back-btn">뒤로가기</button>
              <button type="button" className="btn upload-btn" disabled={upload_btn_disabled}>올리기</button>
            </div>
          </div>

          <div className="write-control">
            <div className="control-subject">이미지 정보</div>
            <div className="control-content">
              <div className="file-name">파일명</div>
              <button type="button" className="cancel-btn">업로드 취소</button>
            </div>
          </div>

          <div className="write-control">
            <div className="control-subject">태그설정</div>
            <div className="control-content">
              <TagMaker />
            </div>
          </div>

        </div>
      </WriteWrap>
    </Grid>
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

    .file-name {
      color: #c2c2c2;
      font-size: 14px;
      margin-bottom: 5px;
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
`

export default PostWrite