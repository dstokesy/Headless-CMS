import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';

import Layout from '../layouts';
import { apiEndPoint } from '../lib/api';
import { ContentSelector, Hero } from '@/components';

import type { IPageContent } from '@/content';
import type { IMenuItem } from '../content/menu';

interface IPageData {
    contentData: IPageContent;
    menuItems: IMenuItem[];
}

const Page: React.FC<IPageData> = (props) => {
    const contentData = props.contentData;

    return (
        <Layout layout="default" menuitems={props.menuItems}>
            <Head>
                <title>{contentData.title}</title>
            </Head>

            {contentData.hero_title && contentData.hero_subtitle && (
                <Hero
                    heading={contentData.hero_title}
                    subheading={contentData.hero_subtitle}
                />
            )}

            <div className="pt-12 pb-12">
                {contentData.content_blocks &&
                    contentData.content_blocks.map((item) => (
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

    const resMenu = await fetch(apiEndPoint + 'menus/navigation');
    const menuItems = await resMenu.json();

    return {
        props: {
            contentData,
            menuItems
        }
    };
};

export default Page;
