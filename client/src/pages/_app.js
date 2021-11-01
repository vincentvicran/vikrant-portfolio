import Theme from '../styles/theme';
import { ModalProvider } from 'styled-react-modal';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-coverflow';
import ParticleComponent from '../utils/Particles/ParticleComponent';

import '../utils/SideButton/sidebutton.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Theme>
                <ModalProvider>
                    <ParticleComponent />
                    <Component {...pageProps} />
                </ModalProvider>
            </Theme>
        </>
    );
}
