import React from 'react';

import { SectionTitle } from '../../styles/GlobalComponents';
import { HeroSection, HeroSectionText, HeroSectionSubText, HeroButton } from './HeroStyles';
// import Button from '../../styles/GlobalComponents/Button';

const Hero = () => (
    <HeroSection>
        <SectionTitle>
            Namaste <br />
        </SectionTitle>
        <HeroSectionText>Explore My Personal Portfolio</HeroSectionText>
        <HeroSectionSubText>thorough exhibition of the projects completed and technologies utilized</HeroSectionSubText>
        <a href="#about" className="button">
            <span className="span">Learn More</span>
        </a>
    </HeroSection>
);

export default Hero;

{
    /* <Button onClick={() => (window.location.href = '#about')}>Learn More</Button> */
}
