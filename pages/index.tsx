import Head from 'next/head'
import Layout, { siteTitle } from '../layouts/default'
import styles from './index.module.scss'
import Hero from '../components/Hero/index';
import ContentSection from '../components/ContentSection/index';

const heading = 'Hello World'
const subheading = 'Vivamus magna justo lacinia.'

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Hero heading={heading} subheading={subheading} />

      <div className="pt-12 pb-12">
        <ContentSection />
      </div>
    </Layout>
  )
}
