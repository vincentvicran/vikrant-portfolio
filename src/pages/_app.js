import Theme from '../styles/theme';
import 'swiper/scss';
import 'swiper/scss/effect-coverflow';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Theme>
                <Component {...pageProps} />
            </Theme>
        </>
    );
}
