import { useState } from 'react';
import cx from 'classnames';
import styles from './mobilenavigation.module.scss';

import type { IMenuItem } from '../../content/menu';
import { Navigation, Hamburger } from '@/components';
import { disableBodyScroll, enableBodyScroll } from '../../lib/BodyScroll';

export const MobileNavigation: React.FC<{
    menuitems?: IMenuItem[];
}> = ({ menuitems }) => {
    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active);
    };

    if (typeof document !== 'undefined') {
        active
            ? disableBodyScroll(document.body)
            : enableBodyScroll(document.body);
    }

    return (
        <div>
            <button onClick={showMenu}>
                <Hamburger />
            </button>
            <div
                className={cx(
                    styles.popout,
                    active ? styles.popout_active : ''
                )}
            >
                <div className={cx(styles.popout_header, 'text-right')}>
                    <button onClick={showMenu} className="cursor-pointer">
                        Close
                    </button>
                </div>

                <div className="p-6">
                    <Navigation menuitems={menuitems} navstyle="vertical" />
                </div>
            </div>
        </div>
    );
};

export default MobileNavigation;
