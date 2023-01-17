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
      <ContentSection>
        <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus.</p>
      </ContentSection>
    </Layout>
  )
}
