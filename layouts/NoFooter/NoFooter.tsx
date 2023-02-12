import type { IMenuItem } from '../../content/menu';

import { Header } from '@/components';
import styles from './nofooter.module.scss';

export const NoFooter: React.FC<{
    menuitems?: IMenuItem[];
    children: React.ReactNode;
}> = ({ menuitems, children }) => {
    return (
        <div>
            <div className={styles.layout}>
                <Header menuitems={menuitems} />
                {children}
            </div>
        </div>
    );
};

export default NoFooter;
