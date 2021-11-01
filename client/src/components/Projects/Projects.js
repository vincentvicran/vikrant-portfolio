import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Tilt from 'react-tilt';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';

import {
    BlogCard,
    CardInfo,
    HeaderThree,
    FlexContainer,
    Hr,
    Tag,
    TagList,
    TitleContent,
    UtilityList,
    Img,
    Buttons,
    Info,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { DiCode } from 'react-icons/di';
import { GiStack } from 'react-icons/gi';

const options = {
    reverse: false, // reverse the tilt direction
    max: 5, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 300, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
};

const Projects = () => {
    return (
        <Section id="projects">
            <SectionDivider />
            <SectionTitle>Projects</SectionTitle>
            <FlexContainer>
                <Swiper
                    modules={[EffectCoverflow, Pagination]}
                    effect="coverflow"
                    initialSlide={1}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    grabCursor
                    centeredSlides={true}
                    coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2, slideShadows: false }}
                >
                    {projects.map(({ id, image, title, description, tags, source }, index) => (
                        <SwiperSlide key={id}>
                            <Tilt options={options} key={id}>
                                <BlogCard key={id}>
                                    <Img src={image} />
                                    <TitleContent>
                                        <HeaderThree title={title}>{title}</HeaderThree>
                                        <Hr />
                                    </TitleContent>
                                    <CardInfo>{description}</CardInfo>
                                    <div>
                                        <TitleContent
                                            style={{
                                                margin: '10px auto 0',
                                                fontSize: '20px',
                                                padding: '5px 0 5px',
                                                border: '1px dotted gray',
                                                borderRadius: '7px 0 7px 0',
                                                width: '100px',
                                            }}
                                        >
                                            <GiStack style={{ padding: '5px 5px 0 0' }} />
                                            Stack
                                        </TitleContent>
                                        <TagList>
                                            {tags.map((tag, i) => (
                                                <Tag key={i}>{tag}</Tag>
                                            ))}
                                        </TagList>
                                    </div>
                                    <UtilityList>
                                        <Link href={source} passHref>
                                            <a target="_blank" rel="noreferer">
                                                <Buttons>
                                                    <DiCode style={{ fontSize: '30px' }} />
                                                    <p style={{ padding: '5px 5px 0 0' }}>Source</p>
                                                </Buttons>
                                            </a>
                                        </Link>
                                    </UtilityList>
                                </BlogCard>
                            </Tilt>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </FlexContainer>
            <Info>--- Swipe for more ---</Info>
        </Section>
    );
};

export default Projects;

// {
//     <Tilt
//                                 options={options}
//                                 key={id}
//                             ></Tilt> */
// }
