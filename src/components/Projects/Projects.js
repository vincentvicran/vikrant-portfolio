import React, { useState, useEffect } from 'react';

import Tilt from 'react-tilt';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper';

// import { useMediaQuery } from '../../utils/media';

import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    HeaderThree,
    FlexContainer,
    Hr,
    Tag,
    TagList,
    TitleContent,
    UtilityList,
    Img,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import useWindowDimensions from '../../utils/dimensions';

const Projects = () => {
    const { width } = useWindowDimensions();
    console.log(width);

    return (
        <Section nopadding id="projects">
            <SectionDivider style={{ margin: '1rem 0 0rem' }} />
            <SectionTitle main>Projects</SectionTitle>
            <FlexContainer>
                <Swiper
                    modules={[EffectCoverflow]}
                    effect="coverflow"
                    slidesPerView={3}
                    loop
                    grabCursor
                    autoplay
                    coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2, slideShadows: true }}
                >
                    {projects.map(({ id, image, title, description, tags, source }) => (
                        <SwiperSlide>
                            <Tilt
                                options={{
                                    reverse: false, // reverse the tilt direction
                                    max: 5, // max tilt rotation (degrees)
                                    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
                                    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
                                    speed: 300, // Speed of the enter/exit transition
                                    transition: true, // Set a transition on enter/exit.
                                    axis: null, // What axis should be disabled. Can be X or Y.
                                    reset: true,
                                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                                }}
                            >
                                <BlogCard key={id} activeClassName="selected">
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
                                            Stack
                                        </TitleContent>
                                        <TagList>
                                            {tags.map((tag, i) => (
                                                <Tag key={i}>{tag}</Tag>
                                            ))}
                                        </TagList>
                                    </div>
                                    <UtilityList>
                                        <ExternalLinks href={source} target="_blank">
                                            Source
                                        </ExternalLinks>
                                    </UtilityList>
                                </BlogCard>
                            </Tilt>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </FlexContainer>
        </Section>
    );
};

export default Projects;

const ProjectCards = () => (
    <SwiperSlide>
        {projects.map(({ id, image, title, description, tags, source }) => (
            <Tilt options={{ max: 10 }}>
                <BlogCard key={id} activeClassName="selected">
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
                            Stack
                        </TitleContent>
                        <TagList>
                            {tags.map((tag, i) => (
                                <Tag key={i}>{tag}</Tag>
                            ))}
                        </TagList>
                    </div>
                    <UtilityList>
                        <ExternalLinks href={source} target="_blank">
                            Source
                        </ExternalLinks>
                    </UtilityList>
                </BlogCard>
            </Tilt>
        ))}
    </SwiperSlide>
);
