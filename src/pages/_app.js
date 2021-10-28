import Theme from '../styles/theme';
import { ModalProvider } from 'styled-react-modal';
import 'swiper/scss';
import 'swiper/scss/effect-coverflow';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Theme>
                <ModalProvider>
                    <Component {...pageProps} />
                </ModalProvider>
            </Theme>
        </>
    );
}
