import '../styles/global.scss';
import { AppProps } from 'next/app';
import { wrapper } from '../store/store';

function App({ Component, pageProps }: AppProps) {
    return (
        <main>
            <Component {...pageProps} />
        </main>
    );
}

export default wrapper.withRedux(App);
