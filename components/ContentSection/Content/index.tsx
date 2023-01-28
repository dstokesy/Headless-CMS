import xss from 'xss';
import styles from './../index.module.scss';

interface IMarkupProps {
    markup: string;
}

export default function Content(props: IMarkupProps) {
    const { markup } = props;
    return (
        <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: xss(markup) }}
        />
    );
}
