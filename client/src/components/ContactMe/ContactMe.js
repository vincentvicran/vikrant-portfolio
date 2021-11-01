import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { StyledModal } from './ContactMeStyles';
import { GiClick } from 'react-icons/gi';
import { GrNorton } from 'react-icons/gr';
import { FaWindowClose } from 'react-icons/fa';

import {
    BlogCard,
    CardInfo,
    GridContainer,
    HeaderThree,
    Hr,
    LeftSection,
    TitleContent,
    UtilityList,
    Buttons,
    Buttons1,
    Form,
    Input,
    Img,
    TextArea,
    CloseButton,
} from './ContactMeStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const ContactMe = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal(e) {
        setIsOpen(!isOpen);
    }
    const [feedData, setFeedData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const { name, email, message } = feedData;

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`api/contact`, feedData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!res) {
                console.log(res);
                toast.error('Oops! Check your connection!');
            } else if (name.length === 0 || email.length === 0 || message.length === 0) {
                toast.error(res.data.msg);
            } else if (res.status === 200) {
                toast.success(res.data.msg);
                setFeedData({
                    name: '',
                    email: '',
                    message: '',
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    const onChange = (e) => {
        setFeedData({ ...feedData, [e.target.name]: e.target.value });
    };

    return (
        <Section id="contact">
            <SectionDivider />
            <SectionTitle main>Contact Me</SectionTitle>
            <LeftSection onClick={toggleModal}>
                <Img src="/images/contactPic.png" />
                <Buttons1 type="button" onClick={toggleModal}>
                    <GiClick
                        style={{
                            position: 'absolute',
                            left: '5px',
                            fontSize: '30px',
                            overflow: 'visible',
                        }}
                    />
                    Hey there! Click me!
                </Buttons1>
            </LeftSection>
            {/* //!form submission canceled because form is not connected.//*solution is to give type="submit" to form
            //*button and type="button" to all other buttons */}
            <StyledModal isOpen={isOpen} onBackgroundClick={toggleModal} onEscapeKeydown={toggleModal}>
                <GridContainer>
                    <BlogCard>
                        {/* <Img src={image} /> */}
                        <TitleContent>
                            <HeaderThree title="Feedback">Feedback Galore!</HeaderThree>
                            <Hr />
                        </TitleContent>
                        <CloseButton onClick={toggleModal}>
                            <FaWindowClose />
                        </CloseButton>
                        <CardInfo>Please convey your impressions!</CardInfo>
                        <Form onSubmit={submitHandler}>
                            <UtilityList>
                                <TitleContent>Name</TitleContent>
                                <Input type="text" name="name" value={name} onChange={onChange} />
                            </UtilityList>
                            <UtilityList>
                                <TitleContent>Email</TitleContent>
                                <Input type="email" name="email" value={email} onChange={onChange} />
                            </UtilityList>
                            <UtilityList>
                                <TitleContent>Message</TitleContent>
                                <TextArea rows="4" name="message" value={message} onChange={onChange} />
                            </UtilityList>

                            <Buttons type="submit">
                                <GrNorton style={{ padding: '5px 5px 0 0' }} />
                                Submit
                            </Buttons>
                        </Form>
                    </BlogCard>
                </GridContainer>
            </StyledModal>
        </Section>
    );
};

export default ContactMe;
