import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';

import Layout from '../../layouts';
import { Hero } from '@/components';
import Content from './../../components/ContentSection/Content';
import { getBlogPostData, getAllBlogPostIds } from '../../lib/posts';

import type { IBlogPost } from '../../content/blog';

const BlogPostPage: React.FC<IBlogPost> = (props) => {
    return (
        <Layout layout="default">
            <Head>
                <title>{props.title}</title>
            </Head>

            <Hero heading={props.title} subheading={props.subtitle} />
            <div className="pt-12 pb-12">
                <div className="container mx-auto">
                    <Content markup={props.content} />
                </div>
            </div>
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllBlogPostIds();
    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getBlogPostData(params?.id as string);
    return {
        props: postData
    };
};

export default BlogPostPage;
