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
import { Section } from '../styles/GlobalComponents';

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
            <Section grid>
                <Hero />
                <BgAnimation />
            </Section>
            <Projects />
            <Technologies />
            <Timeline />
            <Acomplishments />
            <ContactMe />
        </Layout>
    );
};

export default Home;
