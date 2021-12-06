import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'

const Signup = () => {
  const history = useHistory()
  const idInputRef = useRef()

  const handleClickLogo = () => {
    history.push('/')
  }

  const handleClickBackBtn = () => {
    history.push('/')
  }

  useEffect(() => {
    idInputRef.current.focus()
  }, [])

  return (
    <SignupWrap>
      <div className="signup-container">
        <h1 onClick={handleClickLogo} className="logo">LOGO</h1>

        <div className="social-signup">
          <p className="label">Register with</p>
          <ul className="social-list">
            <li>kakao</li>
          </ul>
        </div>

        <div className="site-signup">
          <p className="label">or with JJAL-BANG</p>
          <div className="control-group">
            <div className="signup-controls user-id">
              <input ref={idInputRef} placeholder="아이디" type="text" />
              <button type="button" className="double-check-btn">중복확인</button>
            </div>
            <div className="signup-controls">
              <input placeholder="닉네임" type="password" />
            </div>
            <div className="signup-controls">
              <input placeholder="비밀번호" type="password" />
            </div>
            <div className="signup-controls">
              <input placeholder="비밀번호확인" type="password" />
            </div>
          </div>

          <div className="btn-group">
            <button type="button" className="signup-btn">회원가입</button>
          </div>
        </div>
      </div>

      <button onClick={handleClickBackBtn} type="button" className="back-btn">뒤로가기</button>
    </SignupWrap>
  )
}

const SignupWrap = styled.div`
  color: #fff;
  width: 100vw;
  height: 100vh;
  background-color: #141518;
  position: relative;

  .signup-container {
    max-width: 350px;
    margin: 0 auto;
    padding-top: 80px;
    text-align: center;

    .label {
      padding: 8px;
      font-size: 11px;
    }
  }

  .signup-controls.user-id {
    position: relative;

    .double-check-btn {
      position: absolute;
      top: 50%;
      right: 6px;
      transform: translateY(-50%);
      font-size: 10px;
      padding: 3px 6px;
      border: 1px solid #eaeaea;
      color: #fff;
      background-color: transparent;
      border-radius: 3px;
      cursor: pointer;
    }
  }

  .logo {
    font-size: 60px;
    margin-bottom: 90px;
  }

  .social-list,
  .control-group {
    padding: 15px;
    border-radius: 5px;
    background-color: #2c2f34;
  }

  .signup-controls {
    margin-bottom: 10px;

    input {
      border: 0;
      color: #fff;
      width: 100%;
      height: 100%;
      height: 32px;
      padding: 5px 10px;
      border-radius: 5px;
      background-color: #191919;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .btn-group {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .signup-btn {
    cursor: pointer;
    border: 0;
    color: #fff;
    height: 40px;
    border-radius: 5px;
    padding: 10px 25px;
    background-color: #5c69ff;
  }

  .signup-link {
    font-size: 13px;
    cursor: pointer;
    border: 0;
    color: #fff;
    background-color: transparent;
  }

  .back-btn {
    cursor: pointer;
    border: 0;
    color: #fff;
    height: 40px;
    padding: 20px 25px;
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
  }
`

export default Signup