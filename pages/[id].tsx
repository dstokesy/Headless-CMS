import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';

import Layout from '../layouts';
import { getContentData, getAllContentIds } from '../lib/content';
import { ContentSelector, Hero } from '@/components';

import type { IPageContent } from '@/content';

const Page: React.FC<IPageContent> = (props) => {
    const { hero, content } = props;
    return (
        <Layout layout="default">
            <Head>
                <title>{props.title}</title>
            </Head>

            {hero?.heading && hero?.subheading && (
                <Hero heading={hero.heading} subheading={hero.subheading} />
            )}

            <div className="pt-12 pb-12">
                {content &&
                    content.map((item) => (
                        <ContentSelector key={item._group} data={item} />
                    ))}
            </div>
        </Layout>
    );
};

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
        props: contentData
    };
};

export default Page;
