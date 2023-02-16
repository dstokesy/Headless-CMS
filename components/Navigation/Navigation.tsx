import styles from './navigation.module.scss';
import Link from 'next/link';
import cx from 'classnames';

import type { IMenuItem } from '../../content/menu';

type NavigationStyleType = 'horizontal' | 'vertical';

export const Navigation: React.FC<{
    menuitems?: IMenuItem[];
    navstyle: NavigationStyleType;
}> = ({ menuitems, navstyle }) => {
    return (
        <nav className={styles.nav}>
            <ul
                className={cx(
                    navstyle === 'horizontal' ? 'flex justify-end gap-6' : ''
                )}
            >
                {menuitems &&
                    menuitems.map(({ id, title, url }) => (
                        <li
                            key={id}
                            className={cx(
                                navstyle === 'vertical' ? 'mb-3' : ''
                            )}
                        >
                            <Link href={url} className={styles.nav_item}>
                                {title}
                            </Link>
                        </li>
                    ))}
            </ul>
        </nav>
    );
};

export default Navigation;
