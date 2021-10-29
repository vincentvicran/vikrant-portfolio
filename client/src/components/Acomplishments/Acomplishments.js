import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

import Tilt from 'react-tilt';

import { AccomplishmentData } from '../../constants/constants';

const options = {
    reverse: false, // reverse the tilt direction
    max: 25, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 300, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
};

const Acomplishments = () => (
    <Section>
        <SectionDivider style={{ margin: '1rem 0 3rem' }} />
        <SectionTitle>Personal Accomplishment</SectionTitle>
        <Boxes>
            {AccomplishmentData.map((card, index) => (
                <Tilt style={{ zIndex: '15' }} options={options}>
                    <Box key={index}>
                        <BoxNum>{card.number}</BoxNum>
                        <BoxText>{card.text}</BoxText>
                    </Box>
                </Tilt>
            ))}
        </Boxes>
    </Section>
);
export default Acomplishments;
