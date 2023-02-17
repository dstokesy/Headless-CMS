import styles from '../form.module.scss';

type LabelType = {
    text: string;
    id: string;
};

export default function Label(props: LabelType) {
    return (
        <label htmlFor={props.id} className={styles.label}>
            {props.text}
        </label>
    );
}
