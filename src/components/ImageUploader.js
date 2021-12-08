import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { BsUpload } from "react-icons/bs"

const ImageUploader = (props) => {
  const history = useHistory()
  const [imgSrc, setImgSrc] = useState(null)
  const [fileObj, setFileObj] = useState(null)
  
  const handleChangeUploader = (e) => {
    const file = e.target.files[0]

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setImgSrc(reader.result)
      setFileObj(file)
    }
  }

  const handleDragUploader = (e) => {
    e.stopPropagation()
    e.preventDefault()
    const file = e.dataTransfer.files[0]

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setImgSrc(reader.result)
      setFileObj(file)
    }
  }

  const preventDragOver = (e) => {
    e.stopPropagation()
    e.preventDefault()
  }

  return (
    <UploaderWrap onDragEnter={preventDragOver} onDragOver={preventDragOver} onDrop={handleDragUploader}  className="preview-box" htmlFor="imageUploader">
      <img className="preview-img" src={imgSrc} alt=""/>
      <div className="guide-box">
        { 
          !imgSrc 
            && (
              <>
                <BsUpload /> 
                <p>첨부할 이미지를 마우스로 끌어서<br/>추가할 수 있습니다.</p> 
              </>
            )
        }
      </div>
      <input onChange={handleChangeUploader} type="file" id="imageUploader"/>
    </UploaderWrap>
  )
}

const UploaderWrap = styled.label`
    cursor: pointer;
    width: 100%;
    display: flex;
    min-height: 350px;
    border-radius: 5px;
    border: 1px dashed #ccc;
    position: relative;
    overflow: hidden;

    .preview-img {
      width: 100%;
    }

    .guide-box {
      opacity: 0.5;
      font-size: 26px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      
      p {
        margin-top: 10px;
        font-size: 14px;
      }
    }

    input {
      display: none;
    }

    &:hover {
      border: 1px dashed #fff;

      .guide-box {
        opacity: 1;
      }
    }

`

export default ImageUploader;