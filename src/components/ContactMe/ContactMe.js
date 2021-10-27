import React from 'react';

import {
    BlogCard,
    CardInfo,
    GridContainer,
    HeaderThree,
    Hr,
    TitleContent,
    UtilityList,
    Buttons,
    Form,
    Input,
    TextArea,
} from './ContactMeStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const ContactMe = () => (
    <Section nopadding id="contact">
        <SectionDivider style={{ margin: '1rem 0 0rem' }} />
        <SectionTitle main>Contact Me</SectionTitle>
        <GridContainer>
            <BlogCard>
                {/* <Img src={image} /> */}
                <TitleContent>
                    <HeaderThree title="feedback">Feedback Galore!</HeaderThree>
                    <Hr />
                </TitleContent>
                <CardInfo>Please convey your impressions!</CardInfo>
                <Form>
                    <UtilityList>
                        <TitleContent>Name</TitleContent>
                        <Input type="text" />
                    </UtilityList>
                    <UtilityList>
                        <TitleContent>Email</TitleContent>
                        <Input type="email" />
                    </UtilityList>
                    <UtilityList>
                        <TitleContent>Feedback</TitleContent>
                        <TextArea rows="4" />
                    </UtilityList>

                    <Buttons>Submit</Buttons>
                </Form>
            </BlogCard>
        </GridContainer>
    </Section>
);

export default ContactMe;
