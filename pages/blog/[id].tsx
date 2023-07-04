import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { apiEndPoint } from '../../lib/api';

import { useDispatch } from 'react-redux';
import { setMenuState } from '../../store/menuSlice';

import Layout from '../../layouts';
import { Hero } from '@/components';
import Content from './../../components/ContentSection/Content';

import type { IMenuItem } from '../../content/menu';
import type { IBlogPost } from '../../content/blog';

interface IBlogPostPage {
    postData: IBlogPost;
    menuItems: IMenuItem[];
}

const BlogPostPage: React.FC<IBlogPostPage> = (props) => {
    const postData = props.postData;

    const dispatch = useDispatch();
    dispatch(setMenuState(props.menuItems));

    return (
        <Layout layout="default">
            <Head>
                <title>{postData.title}</title>
            </Head>

            <Hero heading={postData.title} subheading={postData.excerpt} />
            <div className="pt-12 pb-12">
                <div className="container mx-auto">
                    <Content markup={postData.content} />
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

    const resMenu = await fetch(apiEndPoint + 'menus/navigation');
    const menuItems = await resMenu.json();

    return {
        props: {
            postData,
            menuItems
        }
    };
};

export default BlogPostPage;
