import styled from 'styled-components';

export const Boxes = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 24px 60px 40px;
    z-index: 10px;
    @media ${(props) => props.theme.breakpoints.md} {
        margin: 20px 0 32px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        display: flex;
        width: 70%;
        margin: 24px 10%;
    }
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    background: #212d45;
    border-radius: 12px;
    height: 200px;
    padding: 12px;
    width: 280px;
    margin: 10px;
    z-index: 5;
    transition: all 0.5s ease 0.1s;

    @media ${(props) => props.theme.breakpoints.sm} {
        height: 110px;
        width: 200px;
    }

    &:hover {
        z-index: 20;
        overflow: visible;
        transform: scale(1.29);
        -webkit-backdrop-filter: blur(15px);
        backdrop-filter: blur(15px);
        background-color: rgba(52, 0, 102, 0.1);
    }
`;
export const BoxNum = styled.h5`
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: 0.01em;
    color: #ffffff;
    margin-bottom: 8px;
    transition: all 0.5s ease 0.1s;

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 28px;
        line-height: 32px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 24px;
        line-height: 26px;
    }
`;

export const BoxText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.75);
    transition: all 0.5s ease 0.1s;

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 16px;
        line-height: 20px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 10px;
        line-height: 14px;
    }
`;

export const Join = styled.div`
    display: flex;
    max-width: 1040px;
    justify-content: center;
    align-items: center;
    padding-bottom: 80px;

    @media ${(props) => props.theme.breakpoints.md} {
        display: flex;
        justify-content: center;
        padding-bottom: 64px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 32px;
    }
`;

export const JoinText = styled.h5`
    display: flex;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.5);

    @media ${(props) => props.theme.breakpoints.md} {
        line-height: 32px;
        font-size: 20px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 16px;
        line-height: 24px;
        margin: 0 0 16px;
    }
`;

export const IconContainer = styled.div`
    display: flex;

    @media ${(props) => props.theme.breakpoints.sm} {
        width: 160px;
        justify-content: space-between;
    }
`;
