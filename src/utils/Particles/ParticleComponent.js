import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from '../../utils/Particles/particlesConfig.json';

export default () => (
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
        <Particles params={particlesConfig} />
    </div>
);
