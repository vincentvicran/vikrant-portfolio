import styled from 'styled-components';

export const FabIcon = styled.div`
    width: 60px;
    height: 60px;
    color: black;
    border-radius: 100%;
    background: #016fb9;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
`;

export const FabMenu = styled.ul`
    list-style-type: none;
    margin: 0;
    position: absolute;
    bottom: 70px;
    right: 0;
    opacity: 0;
    transition: all 0.3s ease;
    transform: scale(0);
    transform-origin: 80% bottom;
`;

export const Fab = styled.div`
    position: fixed;
    bottom: 50px;
    right: 50px;
    cursor: pointer;
    z-index: 1000;
`;

export const FabMenuItem = styled.a`
    display: flex;
    justify-content: flex-end;
`;

export const FabMenuIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background: #016fb9;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
`;

export const FabMenuLabel = styled.span`
    padding: 2px 5px;
    align-self: center;
    user-select: none;
    white-space: nowrap;
    border-radius: 3px;
    font-size: 16px;
    background: #555555;
    color: #ffffff;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    margin-right: 10px;
`;
