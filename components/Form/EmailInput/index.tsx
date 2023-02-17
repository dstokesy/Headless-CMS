import InputGroup from '../InputGroup';
import Label from '../Label';
import styles from '../form.module.scss';

type EmailInputType = {
    labelText: string;
    name: string;
};

export default function EmailInput(props: EmailInputType) {
    const id = 'form_' + props.name;
    return (
        <InputGroup>
            <Label id={id} text={props.labelText} />
            <input
                type="email"
                name={props.name}
                id={id}
                className={styles.input}
            />
        </InputGroup>
    );
}
