import Head from 'next/head';
import styles from './default.module.scss';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';

export const siteTitle = 'Headless CMS';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Next JS site powered by content from Ocotber CMS"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.layout}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
