import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
`;

export const GridContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    padding: 3rem;
    place-items: center;
    column-gap: 2rem;
    row-gap: 3rem;
    @media ${(props) => props.theme.breakpoints.sm} {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        padding-bottom: 0;
    }
`;
export const BlogCard = styled.div`
    border-radius: 10px;
    margin: 0 50px;
    box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
    padding: 50px;
    text-align: center;
    width: 400px;
    backdrop-filter: blur(15px);
    background-color: rgba(52, 0, 102, 0.15);
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 100%;
    }
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
    text-align: center;
    color: #e4e6e7;
    font-style: 2rem;
    line-height: 20px;
    font-size: 14px;
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 0.3rem;
    }
`;

export const UtilityList = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 2.5rem 0;
`;

export const Buttons = styled.button`
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

export const Buttons1 = styled.button`
    width: 200px;
    padding: 10px 0;
    background-color: rgba(100, 100, 255, 0.6);
    margin: auto;
    color: #d4c0c0;
    border: 0;
    font-size: 1.6rem;
    padding: 1rem 1.5rem;
    border-radius: 15px;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
        background-color: rgba(100, 0, 255, 0.6);
    }
`;

export const TagList = styled.ul`
    display: flex;
    justify-content: space-around;
    padding: 2rem;
`;
export const Tag = styled.li`
    color: #d8bfbf;
    font-size: 1.5rem;
`;

export const Form = styled.form`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
`;

export const Input = styled.input`
    background: transparent;
    line-height: 24px;
    border: 1px dotted gray;
    border-radius: 15px;
    color: #d8bfbf;
    padding: 5px 10px;
    text-align: center;
    font-size: 14px;
    width: 230px;
`;

export const TextArea = styled.textarea`
    background: transparent;
    line-height: 24px;
    border: 1px dotted gray;
    border-radius: 15px;
    color: #d8bfbf;
    font-size: 14px;
    padding: 5px 10px;
    text-align: center;
    width: 230px;

    resize: none;
`;
