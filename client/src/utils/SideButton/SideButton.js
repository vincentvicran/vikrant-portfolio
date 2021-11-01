import React, { useState } from 'react';
import { GrHome, GrProjects, GrConfigure, GrUserExpert, GrContact } from 'react-icons/gr';
import { FaInstalod } from 'react-icons/fa';

const SideButton = () => {
    const [id, setId] = useState('marker');

    const [markerOn, setMarkerOn] = useState({
        home: '',
        projects: '',
        tech: '',
        about: '',
        contact: '',
    });

    const { home, projects, tech, about, contact } = markerOn;

    const [menu, setMenu] = useState(false);
    const [option, setOption] = useState(false);

    const [rotate, setRotate] = useState('');

    const [menuStyle, setMenuStyle] = useState({
        boxShadow: '0 0 2px #5da6ff, 0 0 6px #5da6ff, 0 0 10px #5da6ff, 0 0 14px #5da6ff',
    });

    const [optionStyle, setOptionStyle] = useState('');

    const handleMenuClick = () => {
        if (menu == false) {
            setMenuStyle({
                boxShadow: '0 0 5px #5da6ff, 0 0 10px #5da6ff, 0 0 20px #5da6ff, 0 0 25px #5da6ff',
            });
            setOptionStyle('option');
            setRotate('rotate');
            setMenu(true);
        } else {
            setMenuStyle({
                boxShadow: '0 0 2px #5da6ff, 0 0 6px #5da6ff, 0 0 10px #5da6ff, 0 0 14px #5da6ff',
            });
            setOptionStyle('');
            setRotate('');
            setMenu(false);
        }
    };

    const handleOptionsClick = (e) => {
        console.log(e);
        if (option == false) {
            setMarkerOn({ [e]: e });
            setOption(true);
            console.log('enabled');
        }
    };

    return (
        <div className="fab-container">
            <div className="fab" onClick={handleMenuClick}>
                <div id="menu-marker" style={menuStyle}></div>
                <FaInstalod className="fab-i" id={rotate} />
            </div>
            <ul className="fab-options" id={optionStyle}>
                <li
                    className="fab-li"
                    onClick={() => {
                        setMarkerOn({
                            projects: '',
                            tech: '',
                            about: '',
                            contact: '',
                        });
                        setOption(false);
                        setMarkerOn({ home: 'home' });
                        setOption(true);
                    }}
                >
                    <div id={id} className={home}></div>
                    <a href="#" className="fab-icon-holder">
                        <GrHome className="fab-options-i" />
                    </a>
                </li>
                <li
                    className="fab-li"
                    onClick={(e) => {
                        setMarkerOn({
                            home: '',
                            tech: '',
                            about: '',
                            contact: '',
                        });
                        setOption(false);
                        setMarkerOn({ projects: 'projects' });
                        setOption(true);
                    }}
                    name="projects"
                >
                    <div id={id} className={projects}></div>
                    <a href="#projects" className="fab-icon-holder">
                        <GrProjects className="fab-options-i" />
                    </a>
                </li>
                <li
                    className="fab-li"
                    onClick={(e) => {
                        setMarkerOn({
                            home: '',
                            projects: '',
                            about: '',
                            contact: '',
                        });
                        setOption(false);
                        setMarkerOn({ tech: 'tech' });
                        setOption(true);
                    }}
                    name="tech"
                >
                    <div id={id} className={tech}></div>
                    <a href="#tech" className="fab-icon-holder">
                        <GrConfigure className="fab-options-i" />
                    </a>
                </li>
                <li
                    className="fab-li"
                    onClick={(e) => {
                        setMarkerOn({
                            home: '',
                            projects: '',
                            tech: '',
                            contact: '',
                        });
                        setOption(false);
                        setMarkerOn({ about: 'about' });
                        setOption(true);
                    }}
                    name="about"
                >
                    <div id={id} className={about}></div>
                    <a href="#about" className="fab-icon-holder">
                        <GrUserExpert className="fab-options-i" />
                    </a>
                </li>
                <li
                    className="fab-li"
                    onClick={(e) => {
                        setMarkerOn({
                            home: '',
                            projects: '',
                            tech: '',
                            about: '',
                        });
                        setOption(false);
                        setMarkerOn({ contact: 'contact' });
                        setOption(true);
                    }}
                    name="contact"
                >
                    <div id={id} className={contact}></div>
                    <a href="#contact" className="fab-icon-holder">
                        <GrContact className="fab-options-i" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SideButton;
