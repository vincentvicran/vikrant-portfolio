import styled from 'styled-components';

export const FlexContainer = styled.section`
    display: flex;
    @media ${(props) => props.theme.breakpoints.sm} {
        padding-bottom: 0;
        position: relative;
        // left: -100px;
    }
`;
export const BlogCard = styled.div`
    border-radius: 10px;
    box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
    text-align: center;
    padding: 3rem;
    background-color: rgba(30, 19, 34, 0.95);
    width: 300px;
    height: auto;

    @media ${(props) => props.theme.breakpoints.sm} {
        width: 200px;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
export const TitleContent = styled.div`
    text-align: center;
    z-index: 20;
    width: 100%;
`;

export const HeaderThree = styled.h3`
    font-weight: 500;
    letter-spacing: 2px;
    color: #9cc9e3;
    padding: 0.5rem 0;
    font-size: ${(props) => (props.title ? '3rem' : '2rem')};
`;

export const Hr = styled.hr`
    width: 50px;
    height: 3px;
    margin: 20px auto;
    border: 0;
    background: #d0bb57;
`;

export const Intro = styled.div`
    width: 170px;
    margin: 0 auto;
    color: #dce3e7;
    font-family: 'Droid Serif', serif;
    font-size: 13px;
    font-style: italic;
    line-height: 18px;
`;

export const CardInfo = styled.p`
    width: 100%;
    padding: 0 20px;
    color: #e4e6e7;
    font-style: 2rem;
    line-height: 24px;
    text-align: justify;
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 0.3rem;
        font-size: 12px;
        line-height: 16px;
    }
`;

export const UtilityList = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    margin: 2.5rem 0;
`;

export const Buttons = styled.button`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    color: #d4c0c0;
    border: 0;
    font-size: 1.6rem;
    padding: 1rem 1.5rem;
    background: #6b3030;
    border-radius: 15px;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
        background: #801414;
    }
`;

export const TagList = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px 0;
`;
export const Tag = styled.li`
    color: #d8bfbf;
    font-size: 1.5rem;
`;
