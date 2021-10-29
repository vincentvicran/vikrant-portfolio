import styled from 'styled-components';

export const HeroSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 90px 18%;
    width: 700px;
    position: relative;
    overflow: hidden;
    z-index: 5;

    @media ${(props) => props.theme.breakpoints.md} {
        padding: 24px 48px 0;
        flex-direction: column;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        display: flex;
        width: auto;
        margin: 0 10%;
        flex-direction: column;
    }
`;

export const HeroSectionText = styled.h3`
    max-width: 800px;
    font-size: 40px;
    line-height: 40px;
    font-weight: 400;
    padding: 2rem 5px;
    color: rgba(255, 255, 255, 0.7);

    @media ${(props) => props.theme.breakpoints.md} {
        max-width: 670px;
        font-size: 20px;
        line-height: 32px;
        padding-bottom: 24px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 16px;
        line-height: 24px;
        padding-bottom: 16px;
    }
`;

export const HeroSectionSubText = styled.p`
    max-width: 800px;
    font-weight: 200;
    font-size: 17px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.5);
    padding: 0 5px 10px;

    @media ${(props) => props.theme.breakpoints.md} {
        max-width: 672px;
        font-size: 16px;
        line-height: 25px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 14px;
        line-height: 22px;
    }
`;
