import xss from 'xss';
import styles from './../index.module.scss';

export default function Content({ markup }: { markup: string }) {
  return (
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: xss(markup) }}
    />
  );
}
