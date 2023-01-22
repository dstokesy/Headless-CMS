import Head from 'next/head';
import Layout, { siteTitle } from '../../layouts/default';
import Hero from '../../components/Hero/index';
import ContentSection from '../../components/ContentSection/index';

const heading = 'Frontend';
const subheading = 'Vivamus magna justo lacinia.';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Hero heading={heading} subheading={subheading} />

      <div className="pt-12 pb-12">
        <ContentSection pageId="frontend" />
      </div>
    </Layout>
  );
}
