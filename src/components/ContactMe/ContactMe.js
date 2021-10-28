import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { StyledModal } from './ContactMeStyles';

import {
    BlogCard,
    CardInfo,
    GridContainer,
    HeaderThree,
    Hr,
    TitleContent,
    UtilityList,
    Buttons,
    Buttons1,
    Form,
    Input,
    TextArea,
} from './ContactMeStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Autoplay } from 'swiper';

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
            const res = await axios.post(`http://localhost:3300/contactme`, feedData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log(res);

            if (name.length === 0 || email.length === 0 || message.length === 0) {
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
        <Section nopadding id="contact">
            <SectionDivider style={{ margin: '1rem 0 0rem' }} />
            <SectionTitle main>Contact Me</SectionTitle>
            <Buttons1 onClick={toggleModal}>Hey there! Click me!</Buttons1>

            <StyledModal isOpen={isOpen} onBackgroundClick={toggleModal} onEscapeKeydown={toggleModal}>
                <GridContainer>
                    <BlogCard>
                        {/* <Img src={image} /> */}
                        <TitleContent>
                            <HeaderThree title="Feedback">Feedback Galore!</HeaderThree>
                            <Hr />
                        </TitleContent>
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

                            <Buttons type="submit" onClick={toggleModal}>
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
