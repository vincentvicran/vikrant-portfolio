import React from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import SideButton from '../utils/SideButton/SideButton';
import { Container } from './LayoutStyles';

export const Layout = ({ children }) => {
    return (
        <Container>
            <Header />
            <SideButton />
            <main>{children}</main>
            <Footer />
        </Container>
    );
};
