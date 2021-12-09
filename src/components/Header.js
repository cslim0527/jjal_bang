import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg'
import {FiSearch} from 'react-icons/fi'
import _ from "lodash"
import { history } from '../redux/configureStore';



const Header = () => {
    const [text, setText] = React.useState();

    const onChange = (e) => {
        setText(e.target.value);
        keyPress(e);
    }

    const debounce = _.debounce((e) => {
        console.log("debounce :::", e.target.value);
    }, 1000); // 디바운스

    const throttle = _.throttle((e) => {
        console.log("throttle :::", e.target.value);
    }, 1000) // 쓰로틀

    const keyPress = React.useCallback(debounce, []);

    return (
        <MainHeader>
            <LogoPost>
                <MainLogo onClick={()=>{history.push('/')}}><img src={logo}/></MainLogo>
                <NewPost onClick={()=>{history.push('/write')}}>
                    <img
                        src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.13ab64f9f36ad8f25ae3544b350e2ae1.svg"></img>
                    <span>NewPost</span>
                </NewPost>
            </LogoPost>
            <InputSearch>
                <MainInput
                    value={text}
                    onChange={onChange}
                    type="text"
                    placeholder="Image,#tag,@user"/>
                <SearchBtn>
                    <FiSearch size="30" color="white"></FiSearch>
                </SearchBtn>
            </InputSearch>
            <LoginBtn onClick={()=> {history.push('/login')}}>LogIn</LoginBtn>
        </MainHeader>
    );
};

export default Header;

const MainHeader = styled.div `
  width: 100%;
  background: #171544;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const LogoPost = styled.div `
  display: flex;
  align-items: center;
`
const MainLogo = styled.h1 `
  margin-right: 10px;
  width: 80px;
  cursor: pointer;
`
const NewPost = styled.button `
    display: flex;
    text-align: center;
    height: 35px;
    padding: 7px 14px 10px 9px;
    border-radius: 3px;
    font-size: 15px;
    font-weight: 700;
    background-color: #1bb76e;
    color: white;
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
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 80vh;
`
const SearchBtn = styled.button `
    position:absolute;
    right: 0px;
    background: none;
    border: 0;
    width: 36px;
    height: 36px;
    
`