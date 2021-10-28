import React from 'react';

import { SectionTitle } from '../../styles/GlobalComponents';
import { HeroSection, HeroSectionText, HeroSectionSubText } from './HeroStyles';
import Button from '../../styles/GlobalComponents/Button';

const Hero = (props) => (
    <HeroSection>
        <SectionTitle>
            Namaste <br />
        </SectionTitle>
        <HeroSectionText>Explore My Personal Portfolio</HeroSectionText>
        <HeroSectionSubText>exhibit and rejoice the vibes of my enthusiastic coding career</HeroSectionSubText>
        <Button onClick={() => (window.location.href = '#about')}>Learn More</Button>
    </HeroSection>
);

export default Hero;
