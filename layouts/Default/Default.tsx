import type { IMenuItem } from '../../content/menu';

import { Footer, Header } from '@/components';
import styles from './default.module.scss';

export const Default: React.FC<{
    menuitems?: IMenuItem[];
    children: React.ReactNode;
}> = ({ menuitems, children }) => {
    return (
        <div className={styles.layout}>
            <Header menuitems={menuitems} />
            {children}
            <Footer />
        </div>
    );
};

export default Default;
