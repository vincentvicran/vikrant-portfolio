import React from 'react';
import Particles from 'react-particles-js';
import snowParticlesConfig from '../../utils/Particles/snowParticlesConfig.json';
import starParticlesConfig from '../../utils/Particles/starParticlesConfig.json';

export const ParticleComponent = ({ theme }) => (
    <div
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: '1',
        }}
    >
        <Particles params={theme === 'snow' ? snowParticlesConfig : starParticlesConfig} />
    </div>
);

export default ParticleComponent;
