import styles from './header.module.scss';
import Link from 'next/link';
import cx from 'classnames';

import { MobileNavigation } from './../MobileNavigation';
import { Navigation } from '@/components';

export const Header: React.FC = () => {
    return (
        <header className={cx(styles.header, 'p-6')}>
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-start-1 col-end-9 md:col-end-5 lg:col-end-4">
                        <div className={cx(styles.logo, 'uppercase')}>
                            <Link href="/">Headless CMS</Link>
                        </div>
                    </div>
                    <div className="col-start-9 col-end-13 md:col-start-5 lg:col-start-4">
                        <div className="md:hidden text-right">
                            <MobileNavigation />
                        </div>
                        <div className="hidden md:block">
                            <Navigation navstyle="horizontal" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
