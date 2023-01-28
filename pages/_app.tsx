import '../styles/global.scss';
import { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Next JS site powered by content from Ocotber CMS"
                />
                <title>Daniel Stokes Portfolio</title>
                <meta name="og:title" content="Daniel Stokes Portfolio" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <main>
                <Component {...pageProps} />
            </main>
        </>
    );
}
