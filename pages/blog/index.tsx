import Head from 'next/head';
import { apiEndPoint } from '../../lib/api';
import { GetStaticProps } from 'next';

import Layout from '../../layouts';
import { Hero, BlogPost } from '@/components';

import type { IMenuItem } from '../../content/menu';
import type { IBlogPost } from '../../content/blog';

interface IBlogIndexProps {
    posts: IBlogPost[];
    menuItems: IMenuItem[];
}

const BlogIndex: React.FC<IBlogIndexProps> = (props) => {
    return (
        <Layout menuitems={props.menuItems}>
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
    const posts = await res.json();

    const resMenu = await fetch(apiEndPoint + 'menus/navigation');
    const menuItems = await resMenu.json();

    return {
        props: {
            posts,
            menuItems
        }
    };
};

export default BlogIndex;
