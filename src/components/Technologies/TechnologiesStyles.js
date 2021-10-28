import styled from 'styled-components';

export const ImageContainer = styled.div`
    text-align: center;
    background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
    width: 100%;
    padding: 60px;
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${(props) => props.theme.breakpoints.lg} {
        background-image: none;
        padding: 0;
        margin-top: 40px;
    }
    @media ${(props) => props.theme.breakpoints.md} {
        background-image: none;
        padding: 0;
        margin-top: 16px;
    }
`;

export const MainImage = styled.img`
    width: 100%;
`;

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    margin: 3rem 0;
    padding: 20px;
    justify-content: space-around;

    @media ${(props) => props.theme.breakpoints.sm} {
        flex-direction: column;
        margin: 0;
    }
`;

export const ListItem = styled.li`
    max-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: start;

    @media ${(props) => props.theme.breakpoints.md} {
        max-width: 203px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        margin: 10px 0;
        max-width: 320px;
    }
`;

export const SubList = styled.ul`
    list-style-type: none;
    display: flex;
    margin: 3rem 0;
    flex-wrap: wrap;
    align-items: start;
    justify-content: start;

    @media ${(props) => props.theme.breakpoints.lg} {
        margin: 64px 0;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        margin: 64px 0;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        margin: 0;
    }
`;

export const SubListItem = styled.li`
    display: flex;
    flex-direction: column;
    margin: 12px;
    width: 80px;
    padding: 10px 30px;

    align-items: center;
    justify-content: start;
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 70px;
        margin: 0 2px;
        padding: 10px;
    }
`;

export const ListTitle = styled.h4`
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: 0.02em;
    color: #ffffff;
    margin-bottom: 8px;

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 24px;
        line-height: 28px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0.02em;
    }
`;

export const ListParagraph = styled.p`
    font-size: 14px;
    line-height: 30px;
    color: rgba(255, 255, 255, 0.75);

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 16px;
        line-height: 28px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 14px;
        line-height: 22px;
    }
`;

export const ListIcon = styled.img`
    display: block;
    width: 48px;
    height: 48px;
    margin-bottom: 10px;

    @media ${(props) => props.theme.breakpoints.md} {
        width: 40px;
        height: 40px;
        margin-bottom: 8px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        width: 32px;
        height: 32px;
        margin-bottom: 0px;
    }
`;

export const TechSubText = styled.p`
    max-width: 800px;
    font-weight: 200;
    font-size: 14px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.5);
    padding: 0 5px 10px;

    @media ${(props) => props.theme.breakpoints.md} {
        max-width: 672px;
        font-size: 16px;
        line-height: 25px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 12px;
        line-height: 22px;
    }
`;
