import React from 'react';

import { SectionTitle } from '../../styles/GlobalComponents';
import { HeroSection, HeroSectionText, HeroSectionSubText } from './HeroStyles';
import Button from '../../styles/GlobalComponents/Button';

const Hero = () => (
    <HeroSection>
        <SectionTitle>
            Namaste <br />
        </SectionTitle>
        <HeroSectionText>Explore My Personal Portfolio</HeroSectionText>
        <HeroSectionSubText>exhibit the projects completed and technologies utilized</HeroSectionSubText>
        <div style={{ zIndex: '5' }}>
            <Button onClick={() => (window.location.href = '#about')}>Learn More</Button>
        </div>
    </HeroSection>
);

export default Hero;
