import Page from './[id]';
import { apiEndPoint } from '../lib/api';
import { GetStaticProps } from 'next';
import type { IPageContent } from '../content';

const IndexPage = (props: IPageContent) => {
    return <Page {...props} />;
};

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(apiEndPoint + 'pages/load/home');
    const contentData = await res.json();

    return {
        props: contentData
    };
};

export default IndexPage;
