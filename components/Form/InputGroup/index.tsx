import styles from '../form.module.scss';

type InputGroupType = {
    children: React.ReactNode;
};

export default function InputGroup(props: InputGroupType) {
    return <div className={styles.group}>{props.children}</div>;
}
