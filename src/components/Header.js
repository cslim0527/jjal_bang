import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import _ from "lodash"
import { history } from '../redux/configureStore';

import logo from '../images/logo.svg'
import {FiSearch} from 'react-icons/fi'
import { Grid, Button } from '../elements';

const Header = (props) => {
    const [text, setText] = React.useState();
    const [shadow, setShadow] = useState(false)
    const searchRef = useRef(null)

    const onChange = (e) => {
        setText(e.target.value);
        // keyPress(e);
    }

    // const debounce = _.debounce(async (e) => {
    //     }, 1000); // 디바운스




    const throttle = _.throttle((e) => {
    }, 1000) // 쓰로틀

    // const keyPress = React.useCallback(debounce, []);

    const handleHeadeShadow = () => {
        if (window.scrollY < 100) {
            setShadow(false)
        } else {
            setShadow(true)
        }

        searchRef.current?.blur()
    }

    useEffect(() => {
        window.addEventListener('scroll', handleHeadeShadow)
        return () => {
            window.removeEventListener('scroll', handleHeadeShadow)
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
                <Button _onClick={() => history.push('/write') } _type="button" version="cobalt-blue">짤 등록</Button>
                <Button _onClick={() => history.push('/login') } _type="button">로그인</Button>
                <Button _onClick={() => history.push('/signup') } _type="button" version="green">회원가입</Button>
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .search-box {
        position: relative;
        width: 80vh;
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