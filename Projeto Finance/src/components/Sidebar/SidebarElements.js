import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside `
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background: #0c0c0c;
    transition: 0.3s all ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes) `
    color: #ffffff;
`

export const Icon = styled.div `
    top: 1.2rem;
    right: 1.5rem;
    position: absolute;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
`

export const SidebarWrapper = styled.div `
    color: #ffffff;
`

export const SidebarMenu = styled.ul `
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkScroll) `
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: #ffffff;
    transition: 0.3s all ease-in-out;
    cursor: pointer;

    &:hover {
        color: #01fe95;
        transition: 0.3s all ease-in-out;
    }
`

export const SidebarBtnWrap = styled.div `
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkRouter) `
    background: #01fe95;
    font-size: 0.938rem;
    color: #0c0c0c;
    padding: 0.938rem 4rem;
    border-radius: 50px;
    white-space: nowrap;
    cursor: pointer;
    transition: 0.3s all ease-in-out;

    &:hover {
        transition: 0.3s all ease-in-out;
        background: #ffffff;
        color: #0c0c0c;
    }
`