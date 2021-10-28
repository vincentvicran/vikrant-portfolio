import styled from 'styled-components';

export const FooterWrapper = styled.section`
    padding: 2rem 48px 40px;
    margin: 1rem 5%;

    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 0 16px 48px;
    }
`;

export const LinkItem = styled.a`
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    line-height: 30px;
    color: rgba(255, 255, 255, 0.75);
    margin-bottom: 16px;
    transition: 0.3s ease;

    &:hover {
        color: #fff;
        left: 6px;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 16px;
        line-height: 28px;
        display: flex;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 8px;
        line-height: 14px;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
    }
`;

export const SocialIconsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media ${(props) => props.theme.breakpoints.md} {
        display: flex;
        justify-content: space-between;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        display: flex;
        width: 100%;
        flex-direction: column;
    }
`;

export const CompanyContainer = styled.div`
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    margin-right: auto;

    @media ${(props) => props.theme.breakpoints.md} {
        flex-direction: column;
        align-items: baseline;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        display: flex;
        flex-direction: column;
        margin: 0 0 32px;
        align-items: center;
    }
`;

export const Slogan = styled.p`
    color: rgba(255, 255, 255, 0.5);
    min-width: 280px;
    letter-spacing: 0.02em;
    font-size: 18px;
    line-height: 30px;
    padding: 1rem;

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 16px;
        line-height: 28px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        line-height: 22px;
        font-size: 14px;
        min-width: 100px;
    }
`;

export const SocialContainer = styled.div`
    display: flex;
    align-items: center;

    @media ${(props) => props.theme.breakpoints.md} {
        justify-content: center;
        padding-right: 16px;
        flex-wrap: wrap;
    }
`;

export const LinkList = styled.ul`
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;

    padding: 40px 20px 28px;

    @media ${(props) => props.theme.breakpoints.lg} {
        padding: 32px 0 16px;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        width: 100%;
        padding: 32px 0 16px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 100%;
        padding: 32px 4px 16px;
    }
`;

export const LinkColumn = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 220px;
    width: 100%;
`;
export const LinkTitle = styled.h4`
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 24px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 16px;

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 10px;
        line-height: 12px;
        margin-bottom: 8px;
    }
`;
