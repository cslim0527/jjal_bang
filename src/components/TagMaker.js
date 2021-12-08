import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

import { IoIosClose } from "react-icons/io"
import { ImPlus } from "react-icons/im"



const TagMaker = () => {
  const [tags, setTag] = useState([])
  const [adder, setAdder] = useState(true)
  const [input_value, setInput] = useState('')
  const [mode, setMode] = useState(false)
  const [prevent_space, setPreventSpace] = useState(false)
  let addInputRef = useRef(null)

  const handleChangeInput = (e) => {
    if (e.key === ' ') {
      e.preventDefault()
      setPreventSpace(true)
      return
    } else {
      setPreventSpace(false)
    }

    if (e.key === 'Enter') {
      addInputRef.current.blur()
      return
    }
    
    setInput(e.target.value.replace(/\s+/g, ''))
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
      <input ref={addInputRef} onBlur={handleBlurInput} onKeyDown={handleChangeInput} defaultValue={input_value} type="text" size={input_value.length < 4 ? 1 : input_value.length}/>
      {
        prevent_space
          ? <p className="tooltip alert"> <span className="key">공백</span> 은 입력 할 수 없습니다</p>
          : <p className="tooltip"> <span className="key">엔터</span> 로 작성완료</p>
      }
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
    position: relative;

    input {
      color: inherit;
      width: 100%;
      height: 100%;
      padding: 11px 20px;
      background: none;
      outline: none;
      border: 0;
    }

    .tooltip {
      position: absolute;
      top: 110%;
      left: -10px;
      white-space: nowrap;
      color: #fff;
      font-size: 12px;
      padding: 6px 10px;
      border-radius: 10px;
      background-color: #03a9f4;
      border: 1px solid #2e3035;
      box-shadow: 0 1px 4px 0 rgb(255 255 255 / 40%);
      line-height: 15px;

      .key {
        font-size: 10px;
        color: #000;
        border-radius: 5px 5px 3px 3px;
        padding: 1px 7px 3px 7px;
        background-color: #fff;
        border: 2px solid #1d1d1b;
        position: relative;
        top: -2px;
      }

      &.alert {
        background-color: #f44336;

        &::after {
          border-bottom: 5px solid #f44336;
        }
      }

      &::after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
        border-bottom: 5px solid #03a9f4;
        position: absolute;
        top: -10px;
        left: 10px;
      }
    }

    &.hide {
      display: none;
    }
  }

`

export default TagMaker