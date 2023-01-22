import styles from './index.module.scss';
import cx from 'classnames';

export default function Hero({
  heading,
  subheading
}: {
  heading: React.ReactNode;
  subheading: React.ReactNode;
}) {
  return (
    <section className={styles.hero}>
      <div className="container mx-auto">
        <div
          className={cx(styles.hero_inner, 'flex items-center justify-center')}
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
