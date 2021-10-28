import React from 'react';
import { GrProjects, GrConfigure, GrUserExpert, GrContact } from 'react-icons/gr';
import { FaInstalod } from 'react-icons/fa';
import { Fab, Action } from 'react-tiny-fab';

const SideButton = () => {
    return (
        <Fab icon={<FaInstalod />}>
            <Action text="Contact Me" onClick={() => (window.location.href = '#contact')}>
                <GrContact />
            </Action>
            <Action text="About Me" onClick={() => (window.location.href = '#about')}>
                <GrUserExpert />
            </Action>
            <Action text="Technologies" onClick={() => (window.location.href = '#tech')}>
                <GrConfigure />
            </Action>
            <Action text="Projects" onClick={() => (window.location.href = '#projects')}>
                <GrProjects />
            </Action>
        </Fab>
    );
};

export default SideButton;
