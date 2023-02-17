import InputGroup from '../InputGroup';
import styles from '../form.module.scss';

type ButtonType = {
    children: React.ReactNode;
};

export default function Button(props: ButtonType) {
    return (
        <InputGroup>
            <button type="submit" className={styles.button}>
                {props.children}
            </button>
        </InputGroup>
    );
}
