import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'

const Login = () => {
  const history = useHistory()
  const idInputRef = useRef()

  const handleClickLogo = () => {
    history.push('/')
  }

  const handleClickBackBtn = () => {
    history.push('/')
  }

  const handleClickGoSignUp = () => {
    history.push('/signup')
  }

  useEffect(() => {
    idInputRef.current.focus()
  }, [])

  return (
    <LoginWrap>
      <div className="login-container">
        <h1 onClick={handleClickLogo} className="logo">LOGO</h1>

        <div className="social-login">
          <p className="label">Sign in with</p>
          <ul className="social-list">
            <li>kakao</li>
          </ul>
        </div>

        <div className="site-login">
          <p className="label">or with JJAL-BANG</p>
          <div className="login-controls">
            <input ref={idInputRef} placeholder="아이디" type="text" className="user-id" />
            <input placeholder="비밀번호" type="password" className="user-pw" />
          </div>

          <div className="btn-group">
            <button onClick={handleClickGoSignUp} type="button" className="signup-link">계정이 없으신가요?</button>
            <button type="button" className="login-btn">Sign in</button>
          </div>
        </div>
      </div>

      <button onClick={handleClickBackBtn} type="button" className="back-btn">뒤로가기</button>
    </LoginWrap>
  )
}

const LoginWrap = styled.div`
  color: #fff;
  width: 100vw;
  height: 100vh;
  background-color: #141518;
  position: relative;

  .login-container {
    max-width: 350px;
    margin: 0 auto;
    padding-top: 80px;
    text-align: center;

    .label {
      padding: 8px;
      font-size: 11px;
    }
  }

  .logo {
    font-size: 60px;
    margin-bottom: 90px;
  }

  .social-list,
  .login-controls {
    padding: 12px;
    border-radius: 5px;
    background-color: #2c2f34;
    display: flex;
    flex-direction: column;

    input {
      border: 0;
      color: #fff;
      width: 100%;
      height: 100%;
      height: 32px;
      padding: 5px 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      background-color: #191919;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .btn-group {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .login-btn {
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

export default Login