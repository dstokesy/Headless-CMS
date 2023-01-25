import Head from 'next/head';
import Layout, { siteTitle } from './../../layouts/default';
import Hero from './../../components/Hero/index';
import ContentSection from './../../components/ContentSection/index';
import { getContentData, getAllContentIds } from './../../lib/content';
import { GetStaticProps, GetStaticPaths } from 'next';

const heading = 'Hello World';
const subheading = 'Vivamus magna justo lacinia.';

interface IProps {
    contentData: {
        slug: string;
        title: string;
        content: {
            _group: string;
            columnOne?: string;
            columnTwo?: string;
            columnThree?: string;
        }[];
    };
}

const Page: React.FC<IProps> = ({ contentData }) => {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Hero heading={heading} subheading={subheading} />

            <div className="pt-12 pb-12">
                <ContentSection content={contentData} />
            </div>
        </Layout>
    );
};

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllContentIds();

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const contentData = await getContentData(params?.id as string);

    return {
        props: {
            contentData
        }
    };
};
