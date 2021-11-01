import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import ContactMe from '../components/ContactMe/ContactMe';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { LeftSection } from '../styles/GlobalComponents';

import SideButton from '../utils/SideButton/SideButton';

const Home = () => {
    return (
        <Layout>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <LeftSection>
                <Hero />
                <BgAnimation />
            </LeftSection>
            <Projects />
            <Technologies />
            <Timeline />
            <Acomplishments />
            <ContactMe />
            <SideButton />
        </Layout>
    );
};

export default Home;
