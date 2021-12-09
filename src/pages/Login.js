import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { API } from '../shared/api'
import { useDispatch } from 'react-redux'
import { actionCreators as userActions } from '../redux/modules/user'

import ScaleLoader from "react-spinners/ScaleLoader"

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const idInputRef = useRef()
  const [login_disabeld, setLoginDisabled] = useState(true)
  const [input_values, setInputValues] = useState({user_id: '', user_pw: ''})
  const [spinner, setSpinner] = useState(false)
  const [loginTrue, setLoginTrue] = useState(true)

  const handleClickLogo = () => {
    history.push('/')
  }

  const handleClickBackBtn = () => {
    history.push('/')
  }

  const handleClickGoSignUp = () => {
    history.push('/signup')
  }

  const handleChangeInput = (e) => {
    setInputValues({
      ...input_values,
      [e.target.name]: e.target.value
    })
  }

  const fetchLoginAccess = async () => {
    const { user_id, user_pw } = input_values
    const login_data = {
      userID: user_id,
      password: user_pw
    }
    
    let res = await API.users.login(login_data)
    if (res.data.result === 'success') {
      console.log(res.data)
      dispatch(userActions.loginAction({
        userId: res.data.userId,
        token: res.data.token
      }))
    }

    return res.data.errorMessage ? false : true
  }

  const handleClickLoginBtn = async () => {
    setSpinner(true)
    setLoginDisabled(true)
    setLoginTrue(true)
    const loginPass = await fetchLoginAccess()
    setLoginTrue(loginPass)
    setSpinner(false)
    setLoginDisabled(false)
  }

  useEffect(() => {
    idInputRef.current.focus()
    
    return () => {
    }
  }, [])

  useEffect(() => {
    if (input_values.user_id !== '' && input_values.user_pw !== '') {
      setLoginDisabled(false)
    } else {
      setLoginDisabled(true)
    }

    return () => {
    }

  }, [input_values])

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
            <input onChange={handleChangeInput} name="user_id" ref={idInputRef} placeholder="아이디" type="text" className="user-id" />
            <input onChange={handleChangeInput} name="user_pw" placeholder="비밀번호" type="password" className="user-pw" />
            { !loginTrue && <p className="alert-msg">로그인 정보가 일치하지 않습니다.</p> }
          </div>

          <div className="btn-group">
            <button onClick={handleClickGoSignUp} type="button" className="signup-link">계정이 없으신가요?</button>
            <button onClick={handleClickLoginBtn} type="button" className="login-btn" disabled={login_disabeld}>
              {spinner ? <ScaleLoader height={15} width={2} radius={2} margin={2} color="#fff" disabled/> : '로그인'}
            </button>
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

  .alert-msg {
    padding: 3px;
    color: #f44336;
    font-size: 12px;
  }

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
    
    &:disabled {
      cursor: default;
      opacity: 0.7;
    }
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