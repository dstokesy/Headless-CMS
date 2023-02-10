import { Footer, Header } from '@/components';
import styles from './default.module.scss';

export const Default: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    return (
        <div className={styles.layout}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Default;
