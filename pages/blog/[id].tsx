import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';

import Layout from '../../layouts';
import { apiEndPoint } from '../../lib/api';
import { Hero } from '@/components';
import Content from './../../components/ContentSection/Content';

import type { IBlogPost } from '../../content/blog';

const BlogPostPage: React.FC<IBlogPost> = (props) => {
    return (
        <Layout layout="default">
            <Head>
                <title>{props.title}</title>
            </Head>

            <Hero heading={props.title} subheading={props.excerpt} />
            <div className="pt-12 pb-12">
                <div className="container mx-auto">
                    <Content markup={props.content} />
                </div>
            </div>
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(apiEndPoint + 'blog/slugs');
    const data = await res.json();

    const paths =
        data &&
        data.map((url: string) => {
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
        apiEndPoint + 'blog/load/' + (params?.id as string)
    );
    const postData = await res.json();

    return {
        props: postData
    };
};

export default BlogPostPage;
