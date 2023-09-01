import { useRef } from "react";
import styled from "styled-components";
import MobileMenu from "./MobileMenu";

const HeaderElement = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
    height: 90px;

    @media screen and (min-width: 768px) {
        padding: 32px 0;
        height: unset;
        width: 960px;
        margin: 0 auto;
        border-bottom: 1px solid #E6E6E6;
    }
`;

const Logo = styled.img`
    width: 140px;
    height: auto;
    cursor: pointer;
`;

const BurgerMenu = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    width: 32px;

    span {
        height: 5px;
        background-color: #000000;
        width: 75%;
        margin-bottom: 4px;
        transition: width 0.2s ease, transform 0.2s ease;
            transform-origin: center right;

        &:first-child {
            width: 100%;
        }

        &:last-child {
            width: 50%;
            margin-bottom: 0;
        }
    }

    &.active {
        span {
            width: 0%;

            &:first-child {
                width: 100%;
                transform: rotate(-45deg) translate(2px, -1px);
            }

            &:last-child {
                width: 100%;
                transform: rotate(45deg) translate(2px, 1px);
            }
        }
    }

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

const BigMenu = styled.div`
    position: relative;
    display: none;
    align-items: center;

    @media screen and (min-width: 768px) {
        display: flex;
    }
`;

const BigMenuItem = styled.a`
    font-family: 'Anton';
    text-transform: uppercase;
    font-size: 20px;
    color: #000000;
    text-decoration: none;
    margin-right: 30px;

    &:last-child {
        margin-right: 0;
    }
`;

const HoverSelector = styled.div`
    position: absolute;
    top: 28px;
    left: 0;
    height: 3px;
    width: 22px;
    background-color: #F75AFF;
    transition: left 0.3s ease;
`;

const Header = () => {
    const menuItem = useRef(null);
    const hoverItem = useRef(null);
    const mobileMenu = useRef(null);

    const menuItemHoverHandler = (event) => {
        if (event.target.tagName === 'A') hoverItem.current.style.left = event.target.offsetLeft + 'px'
    }

    const burgerMenuHandler = (event) => {
        let burgerItem = event.target
        if (event.target.tagName !== 'DIV') burgerItem = event.target.parentElement

        if (!burgerItem.classList.contains('active')) {
            burgerItem.classList.add('active')
            mobileMenu.current.classList.add('active')
        }
        else {
            burgerItem.classList.remove('active')
            mobileMenu.current.classList.remove('active')
        }
    }

    return (
        <HeaderElement>
            <Logo src="/logoCNI.png" alt="CNI SOFT logo" />
            
            <BurgerMenu onClick={burgerMenuHandler}>
                <span></span>
                <span></span>
                <span></span>
            </BurgerMenu>

            <BigMenu ref={menuItem} onMouseOver={menuItemHoverHandler}>
                <HoverSelector ref={hoverItem} />
                <BigMenuItem href="#technologies">Technologies</BigMenuItem>
                <BigMenuItem href="#portfolio">Portfolio</BigMenuItem>
                <BigMenuItem href="#contact">Contact</BigMenuItem>
                <BigMenuItem href="#blog">Blog</BigMenuItem>
                <BigMenuItem href="#aboutus">About Us</BigMenuItem>
            </BigMenu>

            <MobileMenu ref={mobileMenu} />
        </HeaderElement>
    );
}

export default Header;