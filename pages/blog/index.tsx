import Head from 'next/head';
import Layout from '../../layouts';
import { apiEndPoint } from '../../lib/api';
import { Hero, BlogPost } from '@/components';
import type { IBlogPost } from '../../content/blog';
import { GetStaticProps } from 'next';

interface IBlogIndexProps {
    posts: IBlogPost[];
}

const BlogIndex: React.FC<IBlogIndexProps> = (props) => {
    return (
        <Layout>
            <Head>
                <title>Blog</title>
            </Head>
            <Hero heading="Blog" subheading="Vivamus magna justo lacinia." />
            <div className="pt-12 pb-12">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {props.posts &&
                            props.posts.map((item) => (
                                <BlogPost key={item.slug} post={item} />
                            ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(apiEndPoint + 'blog/posts/');
    const allPostsData = await res.json();

    return {
        props: {
            posts: allPostsData
        }
    };
};

export default BlogIndex;
