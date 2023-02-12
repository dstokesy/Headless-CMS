import styles from './navigation.module.scss';
import Link from 'next/link';

import type { IMenuItem } from '../../content/menu';

export const Navigation: React.FC<{
    menuitems?: IMenuItem[];
}> = ({ menuitems }) => {
    return (
        <nav className={styles.nav}>
            <ul className="flex justify-end gap-6">
                {menuitems &&
                    menuitems.map(({ id, title, url }) => (
                        <li key={id}>
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
