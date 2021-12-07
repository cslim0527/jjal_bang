import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

import { IoIosClose } from "react-icons/io"
import { ImPlus } from "react-icons/im"

const TagMaker = () => {
  const [tags, setTag] = useState([])
  const [adder, setAdder] = useState(true)
  const [input_value, setInput] = useState('')
  const [mode, setMode] = useState(false)
  let addInputRef = useRef(null)

  // TODO  스페이스바 공백입력 막기, 엔터 입력으로 태그 작성 하기
  const handleChangeInput = (e) => {
    setInput(e.target.value)
  }

  const handleClickAddBtn = () => {
    setMode(true)
    setAdder(false)
  }

  const handleBlurInput = () => {
    addInputRef.current.value = ''
    setInput('')
    setMode(false)
    setAdder(true)

    if (input_value === '') {
      return
    }


    setTag([
      ...tags,
      {
        id: tags.length + 1,
        word: input_value 
      }
    ])
  }

  const handleClickRemoveTag = (removeIdx) => {
    let filtered = tags.filter(tag => tag.id !== removeIdx)
    filtered.map((tag, idx) => tag.id = idx)
    setTag(filtered)
  }

  useEffect(() => {
    if (addInputRef.current) {
      addInputRef.current.focus()
    }
  }, [mode])
  
  return (
    <TagMakerWrap>

    {
      tags.map((tag, idx) => {
        return (
          <div className="tag-btn" key={`tag-uid-${idx}`}>
            { tag.word }
            <button onClick={() => handleClickRemoveTag(tag.id)} type="button" className="remove-btn"><IoIosClose/></button>
          </div>
        )
      })
    }

    <div className={ mode ? 'tag-input' : 'tag-input hide' }>
      <input ref={addInputRef} onBlur={handleBlurInput} onChange={handleChangeInput} defaultValue={input_value} type="text" size={input_value.length < 4 ? 1 : input_value.length}/>
    </div>  
    
    {
      adder && tags.length < 5
        && (
          <button onClick={handleClickAddBtn} type="button" className="tag-btn adder">
            <ImPlus/>추가
          </button>
        )
    }

    </TagMakerWrap>
  )
}

const TagMakerWrap = styled.article`
  display: flex;
  flex-wrap: wrap;

  .tag-btn {
    border: 0;
    height: 36px;
    margin: 0 10px 15px 0;
    background: #585d6a;
    padding: 11px 20px;
    box-shadow: 0 4px 5px rgb(0 0 0 / 24%);
    border-radius: 54px;
    font-size: 14px;
    color: #fff;
    display: inline-flex;
    align-items: center;
    position: relative;
    cursor: default;

    &:hover {
      background: rgb(108, 113, 124);

      .remove-btn {
        display: flex;
      }
    }

    .remove-btn {
      cursor: pointer;
      border: 0;
      background: none;
      width: 20px;
      height: 20px;
      display: none;
      align-items: center;
      justify-content: center;
      background: rgb(254, 96, 101);
      border-radius: 50%;
      color: #fff;
      font-size: 24px;
      position: absolute;
      top: -3px;
      right: -3px;
    }
  }

  .adder {
    cursor: pointer;
    font-weight: bold;

    svg {
      font-size: 13px;
      margin-right: 4px;
    }
  }

  .tag-input {
    height: 36px;
    background: #585d6a;
    box-shadow: 0 4px 5px rgb(0 0 0 / 24%);
    border-radius: 54px;
    font-size: 14px;
    color: #fff;
    margin: 0 10px 15px 0;

    input {
      color: inherit;
      width: 100%;
      height: 100%;
      padding: 11px 20px;
      background: none;
      outline: none;
      border: 0;
    }

    &.hide {
      display: none;
    }
  }

`

export default TagMaker