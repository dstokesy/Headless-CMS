import styles from './hero.module.scss';
import cx from 'classnames';

interface HeroProps {
    heading: string | React.ReactNode;
    subheading: string | React.ReactNode;
}

export default function Hero({ heading, subheading }: HeroProps) {
    return (
        <section className={styles.hero}>
            <div className="container mx-auto">
                <div
                    className={cx(
                        styles.hero_inner,
                        'flex items-center justify-center'
                    )}
                >
                    <div>
                        <h1 className={styles.heading}>{heading}</h1>
                        <p className={styles.subheading}>{subheading}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
