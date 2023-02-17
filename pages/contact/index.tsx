import Head from 'next/head';
import { apiEndPoint } from '../../lib/api';
import { GetStaticProps } from 'next';

import Layout from '../../layouts';
import { Hero, Form } from '@/components';

import type { IMenuItem } from '../../content/menu';

interface IBlogIndexProps {
    menuItems: IMenuItem[];
}

const BlogIndex: React.FC<IBlogIndexProps> = (props) => {
    return (
        <Layout menuitems={props.menuItems}>
            <Head>
                <title>Contact</title>
            </Head>
            <Hero heading="Contact" subheading="Vivamus magna justo lacinia." />
            <div className="pt-12 pb-12">
                <div className="container mx-auto">
                    <Form />
                </div>
            </div>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const resMenu = await fetch(apiEndPoint + 'menus/navigation');
    const menuItems = await resMenu.json();

    return {
        props: {
            menuItems
        }
    };
};

export default BlogIndex;
