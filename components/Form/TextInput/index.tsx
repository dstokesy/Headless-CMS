import Label from '../Label';
import InputGroup from '../InputGroup';
import styles from '../form.module.scss';

type TextInputType = {
    labelText: string;
    name: string;
};

export default function TextInput(props: TextInputType) {
    const id = 'form_' + props.name;
    return (
        <InputGroup>
            <Label id={id} text={props.labelText} />
            <input
                type="text"
                name={props.name}
                id={id}
                className={styles.input}
            />
        </InputGroup>
    );
}
