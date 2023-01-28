import { Header } from '@/components';
import styles from './nofooter.module.scss';

export const NoFooter: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    return (
        <div>
            <div className={styles.layout}>
                <Header />
                {children}
            </div>
        </div>
    );
};

export default NoFooter;
