import { forwardRef } from 'react';
import styled from "styled-components";

const MobileMenuElement = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #F4F4F4;
    padding-top: 32px;
    top: 90px;
    left: 0;
    height: calc(100vh - 90px);
    width: 100vw;
    z-index: 1000;
    transform: scaleX(0);
    transform-origin: center right;
    transition: transform 0.3s ease;

    &.active {
        transform: scaleX(1);
    }
`;

const MenuItem = styled.div`
    font-family: 'Anton';
    text-transform: uppercase;
    font-size: 20px;
    margin-bottom: 32px;

    &:last-child {
        margin-bottom: 0;
    }
`;

const MobileMenu = forwardRef((props, ref) => {
    return (
        <MobileMenuElement ref={ref}>
            <MenuItem href="#technologies">Technologies</MenuItem>
            <MenuItem href="#portfolio">Portfolio</MenuItem>
            <MenuItem href="#contact">Contact</MenuItem>
            <MenuItem href="#blog">Blog</MenuItem>
            <MenuItem href="#aboutus">About Us</MenuItem>
        </MobileMenuElement>
    );
})

export default MobileMenu;