import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 2rem;
    z-index: 5px;
    @media ${(props) => props.theme.breakpoints.sm} {
    }
`;

export const Span = styled.span`
    font-size: 2rem;
`;

export const Div1 = styled.div`
    display: flex;
    flex-direction: row;
    z-index: 5px;
    align-content: center;
`;
export const Div2 = styled.div`
    display: flex;
    z-index: 5px;
    @media ${(props) => props.theme.breakpoints.sm} {
        display: none;
        overflow: hidden;
    }
`;
export const Div3 = styled.div`
    display: flex;
    z-index: 5px;
    justify-content: space-around;
    align-items: center;
    @media ${(props) => props.theme.breakpoints.sm} {
        align-items: center;
        grid-area: 1 / 4 / 2 / 6;
    }
`;

// Navigation Links
export const NavLink = styled.a`
    font-size: 2rem;
    line-height: 32px;
    z-index: 5px;
    color: rgba(255, 255, 255, 0.75);
    transition: 0.4s ease;
    &:hover {
        color: #fff;
        opacity: 1;
        cursor: pointer;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 0.5rem;
    }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
    border: none;
    display: flex;
    z-index: 5px;
    position: relative;
    background: none;
    font-size: 1.7rem;

    line-height: 32px;
    color: rgba(255, 255, 255, 0.75);
    cursor: pointer;
    transition: 0.3s ease;

    &:focus {
        outline: none;
    }
    &:hover {
        color: #fff;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 0.4rem 0;
    }
    @media ${(props) => props.theme.breakpoints.md} {
        padding: 0;
    }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
    margin-left: 8px;
    z-index: 5px;
    display: flex;
    align-self: center;
    transition: 0.3s ease;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
    transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

    &:hover {
        opacity: 1;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        margin: 2px 0 0 2px;
        width: 15px;
    }
`;

// Social Icons

export const SocialIcons = styled.a`
    transition: 0.3s ease;
    z-index: 5px;
    font-size: 24px;
    color: white;
    border-radius: 50px;
    padding: 10px;
    &:hover {
        background-color: #212d45;
        transform: scale(1.2);
        cursor: pointer;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        padding-top: 0;
    }
`;
