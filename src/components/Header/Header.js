import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
    <Container>
        <Div1>
            <Link href="/">
                <a
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'white',
                        marginBottom: '20px',
                        zIndex: '5',
                    }}
                >
                    <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
                </a>
            </Link>
        </Div1>
        <Div2>
            <li style={{ zIndex: '5', padding: '0 15px' }}>
                <Link href="#projects">
                    <NavLink>Projects</NavLink>
                </Link>
            </li>
            <li style={{ zIndex: '5', padding: '0 15px' }}>
                <Link href="#tech">
                    <NavLink>Technologies</NavLink>
                </Link>
            </li>
            <li style={{ zIndex: '5', padding: '0 15px' }}>
                <Link href="#about">
                    <NavLink>About</NavLink>
                </Link>
            </li>
        </Div2>
        <Div3>
            <SocialIcons href="https://github.com/vincentvicran" target="_blank" style={{ zIndex: '5' }}>
                <AiFillGithub />
            </SocialIcons>
            <SocialIcons href="https://linkedin.com/in/vikrant-shrestha" target="_blank" style={{ zIndex: '5' }}>
                <AiFillLinkedin />
            </SocialIcons>
            <SocialIcons href="https://instagram.com/vincentvicran" target="_blank" style={{ zIndex: '5' }}>
                <AiFillInstagram />
            </SocialIcons>
        </Div3>
    </Container>
);

export default Header;
