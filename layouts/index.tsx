import { DefaultLayout } from './Default/index';
import { NoFooterLayout } from './NoFooter';
import type { IMenuItem } from '../content/menu';

interface IProps {
    layout?: 'default' | 'noFooter'; //resctricting selection to these specific layouts. will throw an error otherwise
    menuitems?: IMenuItem[];
    children: React.ReactNode;
}
const Layout = ({ layout, menuitems, children }: IProps): JSX.Element => {
    switch (layout) {
        case 'noFooter':
            return (
                <NoFooterLayout menuitems={menuitems}>
                    {children}
                </NoFooterLayout>
            );
        default:
            return (
                <DefaultLayout menuitems={menuitems}>{children}</DefaultLayout>
            );
    }
};

export default Layout;
