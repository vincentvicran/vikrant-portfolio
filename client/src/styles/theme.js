import { ThemeProvider } from 'styled-components';
import React, { useState } from 'react';

import { BsSnow } from 'react-icons/bs';
import { GiLawStar } from 'react-icons/gi';

import star from '../themes/star';
import snow from '../themes/snow';
import GlobalStyles, { Toggle, ThemeDiv, Text } from './globals';

import ParticleComponent from '../utils/Particles/ParticleComponent';

const Theme = ({ children }) => {
    const [theme, setTheme] = useState('snow');

    const toggleTheme = () => {
        theme === 'snow' ? setTheme('star') : setTheme('snow');
    };

    return (
        <ThemeProvider theme={theme === 'snow' ? snow : star}>
            <ParticleComponent theme={theme} />
            <GlobalStyles />
            {children}
            <Toggle onClick={toggleTheme}>
                {theme === 'snow' ? (
                    <ThemeDiv>
                        <Text>Snow</Text>
                        <BsSnow />
                    </ThemeDiv>
                ) : (
                    <ThemeDiv>
                        <Text>Star</Text>
                        <GiLawStar />
                    </ThemeDiv>
                )}
            </Toggle>
        </ThemeProvider>
    );
};

export default Theme;
