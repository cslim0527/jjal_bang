import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { checkId } from '../api/user'

import ScaleLoader from "react-spinners/ScaleLoader"

const Signup = () => {
  const history = useHistory()
  const idInputRef = useRef()

  const [id_value, setId] = useState('')
  const [nick_value, setNick] = useState('')
  const [pw_value, setPw] = useState('')
  const [check_pw_value, setCheckPw] = useState('')
  const [double_check_value, setDoubleCheck] = useState(null)
  const [check_btn_disabled, setCheckBtnDisabled] = useState(true)
  const [join_btn_disabled, setJoinBtnDisabled] = useState(true)
  const [id_alert, setIdAlert] = useState(false)
  // const [nick_alert, setNickAlert] = useState(false)
  const [pw_alert, setPwAlert] = useState(false)
  const [double_check_alert, setDoubleCheckAlert] = useState(false)

  const handleClickLogo = () => {
    history.push('/')
  }

  const handleClickBackBtn = () => {
    history.push('/')
  }

  const fetchIdCheck = async () => {
    setDoubleCheck('loading')
    const { ok, result } = await checkId()
    if (ok === 'success' && result) {
      setDoubleCheck(true)
    } else {
      setDoubleCheck(false)
    }
  }

  const handleCheckIdRedup = () => {
    if (id_value === '') {
      alert('아이디를 입력해주세요')
      return
    }

    // TODO  중복확인 실제 정보에 따라 true / false 값 세팅할것
    fetchIdCheck()
  }

  const handleChangeId = (e) => {
    setId(e.target.value)
    setDoubleCheck(null)
    setJoinBtnDisabled(true)
  }

  const handleChangePw = (e) => {
    setPw(e.target.value)
  }

  const handleChangeCheckPw = (e) => {
    setCheckPw(e.target.value)
  }

  useEffect(() => {
    idInputRef.current.focus()
  }, [])

  useEffect(() => {
    const idRegx = /^[a-z0-9_-]\w{5,20}$/
    if (id_value !== '') {
      idRegx.test(id_value) ? setIdAlert(false) : setIdAlert(true)
      idRegx.test(id_value) ? setCheckBtnDisabled(false) : setCheckBtnDisabled(true)
    } 

    const pwRegx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/g
    if (pw_value !== '') {
      pwRegx.test(pw_value) ? setPwAlert(false) : setPwAlert(true)
    } 

    if (check_pw_value !== '') {
      check_pw_value === pw_value ? setDoubleCheckAlert(false) : setDoubleCheckAlert(true)
    } 
  }, [id_value, nick_value, pw_value, check_pw_value, double_check_value])


  useEffect(() => {
    const alerts = [id_alert, pw_alert, double_check_alert]
    if (id_value !== '' && pw_value !== '' && check_pw_value !== '' && double_check_value === true) { 
      if (alerts.some(a => a === true)) {
        setJoinBtnDisabled(true)
      } else {
        setJoinBtnDisabled(false)
      }
    }
  }, [id_alert, pw_alert, double_check_alert, double_check_value])
  
  const renderDoubleChkBtn = () => {
    if (double_check_value === null) {
      return <button type="button" onClick={handleCheckIdRedup} className="double-check-btn" disabled={check_btn_disabled}>중복확인</button>
    } else if (double_check_value === 'loading') {
      return <button type="button" onClick={handleCheckIdRedup} className="double-check-btn"><ScaleLoader height="6" width="2" radius="2" margin="2" color="#fff" disabled/></button>
    } else if (double_check_value === false) {
      return <button type="button" onClick={handleCheckIdRedup} className="double-check-btn fail" disabled>사용불가</button>
    } else {
      return <button type="button" onClick={handleCheckIdRedup} className="double-check-btn success" disabled>사용가능</button>
    }
  }

  return (
    <SignupWrap>
      <div className="signup-container">
        <h1 onClick={handleClickLogo} className="logo">logo</h1>

        <div className="social-signup">
          <p className="label">Register with</p>
          <ul className="social-list">
            <li>kakao</li>
          </ul>
        </div>

        <div className="site-signup">
          <p className="label">or with JJAL-BANG</p>
          <div className="control-group">
            <div className="signup-controls">
              <div className="user-id-control">
                <input ref={idInputRef} onChange={handleChangeId} placeholder="아이디" type="text" />
                { renderDoubleChkBtn() }
              </div>
              { id_alert && <p className="alert-msg">영문/숫자 특수문자(_-)조합 6~20자 이상 아이디를 입력해주세요.</p> }
            </div>
            <div className="signup-controls">
              <input placeholder="비밀번호" onChange={handleChangePw} type="password" />
              { pw_alert && <p className="alert-msg">비밀번호는 숫자와 영문자 특수문자(!@#$%^*+=-)<br/>조합으로 8~20자리를 사용해야 합니다.</p> }
            </div>
            <div className="signup-controls">
              <input placeholder="비밀번호확인" onChange={handleChangeCheckPw} type="password" />
              { double_check_alert && <p className="alert-msg">비밀번호 확인이 일치하지 않습니다.</p> }
            </div>
          </div>

          <div className="btn-group">
            <button type="button" className="signup-btn" disabled={join_btn_disabled}>회원가입</button>
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

  .alert-msg {
    padding: 3px;
    color: #f44336;
    font-size: 12px;
    text-align: left;
  }

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

  .user-id-control {
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

      &.success {
        border-color: #4caf50;
        background-color: #4caf50;
      }

      &.fail {
        border-color: #f44336;
        background-color: #f44336;
      }
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

export default Signup