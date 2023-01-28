import Page from './[id]';
import { getContentData } from '../lib/content';
import { GetStaticProps } from 'next';
import type { IPageContent } from '../content';

const IndexPage = (props: IPageContent) => {
    return <Page {...props} />;
};

export const getStaticProps: GetStaticProps = async () => {
    const contentData = await getContentData('/');
    return {
        props: contentData
    };
};

export default IndexPage;
