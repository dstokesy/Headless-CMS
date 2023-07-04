import Page from './[id]';
import { apiEndPoint } from '../lib/api';
import { GetStaticProps } from 'next';
import { setMenuState } from '../store/menuSlice';

import { useDispatch } from 'react-redux';
import type { IPageContent } from '../content';
import type { IMenuItem } from '../content/menu';

interface IPageData {
    contentData: IPageContent;
    menuItems: IMenuItem[];
}

const IndexPage = (props: IPageData) => {
    const dispatch = useDispatch();
    dispatch(setMenuState(props.menuItems));

    return <Page {...props} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(apiEndPoint + 'pages/load/home');
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

export default IndexPage;
