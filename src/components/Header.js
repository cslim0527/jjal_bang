import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { history } from '../redux/configureStore'
import { actionCreators as userActions } from '../redux/modules/user'
import { API } from '../shared/api'
import _ from "lodash"

import logo from '../images/logo.svg'
import {FiSearch} from 'react-icons/fi'
import { Grid, Button } from '../elements'



const Header = () => {
    console.log('[Header]')
    const dispatch = useDispatch()
    const login_state = useSelector(state => state.user) 
    const [text, setText] = React.useState()
    const [shadow, setShadow] = useState(false)
    const [myModal, setMyModal] = useState(false)
    const searchRef = useRef(null)

    const onChange = (e) => {
        setText(e.target.value);
    }

    const handleHeadeShadow = () => {
        if (window.scrollY < 100) {
            setShadow(false)
        } else {
            setShadow(true)
        }

        searchRef.current?.blur()
    }

    const handleMyModal = () => {
        setMyModal(!myModal)
    }

    const handleClickLogout = async () => {
        dispatch(userActions.logoutAction())
    }

    const renderBtnGroup = () => {
        const { user, is_login } = login_state
        if (user !== null && is_login) { // 로그인 상태일때
            return (
                <Grid is_flex>
                    <Button _onClick={() => history.push('/write') } _type="button" version="cobalt-blue">짤 등록</Button>
                    <Grid _className="my-menu">
                        <Button _onClick={handleMyModal} _className="my-menu-btn" _type="button">{login_state.user}</Button>

                        { 
                            myModal 
                                && (
                                    <div className="menu-modal">
                                        <ul>
                                            <li className='my-menu-item' onClick={() => history.push(`/user/posts/${login_state.user}`)}>내 짤목록</li>
                                            <li className='my-menu-item' onClick={() => history.push(`/user/favorites/${login_state.user}`)}>북마크</li>
                                            <li className='my-menu-item' onClick={handleClickLogout}>로그아웃</li>
                                        </ul>
                                    </div>
                                )
                        }
                    </Grid>
                </Grid>
            )
        } else {
            return (
                <>
                    <Button _onClick={() => history.push('/login') } _type="button">로그인</Button>
                    <Button _onClick={() => history.push('/signup') } _type="button" version="green">회원가입</Button>
                </>
            )
        }
    }

    const handleCloseMyMenu = (e) => {
        const isMyMenu = e.target.classList.contains('my-menu-btn')
        if (!isMyMenu) {
            setMyModal(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleHeadeShadow)
        document.addEventListener('click', handleCloseMyMenu)
        return () => {
            window.removeEventListener('scroll', handleHeadeShadow)
            document.removeEventListener('click', handleCloseMyMenu)
        }
    }, [])

    return (
        <MainHeader className={shadow && "shadow"}>
            <LogoPost>
                <MainLogo onClick={() => history.push('/')}><img src={logo} alt=""/></MainLogo>
            </LogoPost>
            <InputSearch>
                <div className="search-box">
                    <MainInput
                        ref={searchRef}
                        value={text}
                        onFocus={() => setShadow(false)}
                        onChange={onChange}
                        type="text"
                        placeholder="Image,#tag,@user"/>
                    <SearchBtn  onClick={() => history.push(`/search/${text}`)}>
                        <FiSearch size="30" color="white"></FiSearch>
                    </SearchBtn>
                </div>
            </InputSearch>
            <Grid _className="btn-group">
                { renderBtnGroup() }
            </Grid>
        </MainHeader>
    )
}

export default Header

const MainHeader = styled.div `
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #171544;
    padding: 4px 16px;
    z-index: 9999;
    width: 100%;
    height: 64px;

    &.shadow {
        box-shadow: rgb(0, 0, 0) 0px 0px 25px 5px;
        opacity: 0.8;
    }

    .btn-group {
        button {
            margin-left: 10px;
        }
    }

    .my-menu {
        position: relative;

        .menu-modal {
            position: absolute;
            top: 90%;
            right: 40%;
            border-radius: 6px;
            background-color: #53565d;
            box-shadow: 0 9px 25px 0 rgb(0 0 0 / 78%);
            -webkit-overflow-scrolling: touch;
            padding: 5px 0;
            overflow-y: auto;
            word-break: keep-all;
            z-index: 9999;
            font-size: 13px;
            min-width: 100px;
            text-align: center;

            li {
                cursor: pointer;
                padding: 8px 12px;

                &:hover {
                    background-color: rgb(118, 120, 125);
                }
            }
        }
    }
`


const LogoPost = styled.div `
  display: flex;
  align-items: center;
`
const MainLogo = styled.h1 `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    width: 80px;
    cursor: pointer;
`
const MainInput = styled.input `
    height: 36px;
    background: hsla(0,0%,100%,.25);
    border: 1px solid transparent;
    padding: 8px 35px 8px 10px;
    border-radius: 3px;
    width: 100%;
    outline: 0 none;
    opacity: .8;
    min-height: 36px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: .4px;
    color: #fff;
    text-shadow: inherit;
    -webkit-text-fill-color: inherit;
 `
const LoginBtn = styled.a `
    color: white;
    cursor: pointer;
    margin-right: 10px;
`
const InputSearch = styled.div `
    max-width: 540px;
    width: 40vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .search-box {
        position: relative;
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`
const SearchBtn = styled.button `
    position: absolute;
    top: 50%;
    margin-top: -15px;
    right: 8px;
    background: none;
    border: 0;
    width: 28px;
    height: 28px;
    cursor: pointer;
`