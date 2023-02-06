import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';

import Layout from '../layouts';
import { apiEndPoint } from '../lib/api';
import { ContentSelector, Hero } from '@/components';

import type { IPageContent } from '@/content';

const Page: React.FC<IPageContent> = (props) => {
    const { hero_title, hero_subtitle, content_blocks } = props;

    return (
        <Layout layout="default">
            <Head>
                <title>{props.title}</title>
            </Head>

            {hero_title && hero_subtitle && (
                <Hero heading={hero_title} subheading={hero_subtitle} />
            )}

            <div className="pt-12 pb-12">
                {content_blocks &&
                    content_blocks.map((item) => (
                        <ContentSelector key={item._group} data={item} />
                    ))}
            </div>
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(apiEndPoint + 'pages/slugs');
    const data = await res.json();

    const paths =
        data &&
        data
            .filter((url: string) => {
                return url != '/';
            })
            .map((url: string) => {
                return {
                    params: {
                        id: url
                    }
                };
            });

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(
        apiEndPoint + 'pages/load/' + (params?.id as string)
    );
    const contentData = await res.json();

    return {
        props: contentData
    };
};

export default Page;
