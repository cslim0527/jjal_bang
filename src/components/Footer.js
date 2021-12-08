import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const throttle = function (callback, waitTime) {
    let timerId = null;
    return (e) => {
        if (timerId) return;
        timerId = setTimeout(() => {
            callback.call(this, e);
            timerId = null;
        }, waitTime);
    };
};

const Footer = () => {
    const [hide, setHide] = useState(false);
    const [pageY, setPageY] = useState(0);
    const documentRef = useRef(document);

    const handleScroll = () => {
        const { pageYOffset } = window;
        const deltaY = pageYOffset - pageY;
        const hide = pageYOffset !== 0 && deltaY >= 0;
        setHide(hide);
        setPageY(pageYOffset);
    };

    const throttleScroll = throttle(handleScroll, 50);

    useEffect(() => {
        documentRef.current.addEventListener('scroll', throttleScroll);
        return () => documentRef.current.removeEventListener('scroll', throttleScroll);
    }, [pageY]);

    return (
        <FooterArea>
            <FooterWrap className={hide && 'hide'}>
                <ul>
                    <li className="copyright">
                        @ 2021 JJal, Team 6
                    </li>
                </ul>
            </FooterWrap>
        </FooterArea>
    );
};

export default Footer;
const FooterArea = styled.div`
    position: relative;
    width: 100%;
`;

const FooterWrap = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 50px;
    transition: 0.4s ease;
    background-color: #33353b;
    display: flex;
    align-items: center;
    padding: 0 30px;
    font-size: 13px;
    color: #b4b9c2;
    font-family: 'BMJUA';
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 50%);
    
    &.hide {
        transform: translateY(80px);
    }
`;