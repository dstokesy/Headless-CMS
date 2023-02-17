import cx from 'classnames';
import InputGroup from '../InputGroup';
import Label from '../Label';
import styles from '../form.module.scss';

type TextAreaInputType = {
    labelText: string;
    name: string;
};

export default function TextAreaInput(props: TextAreaInputType) {
    const id = 'form_' + props.name;
    return (
        <InputGroup>
            <Label id={id} text={props.labelText} />
            <textarea
                name={props.name}
                id={id}
                className={cx(styles.input, styles.textarea)}
                rows={4}
            ></textarea>
        </InputGroup>
    );
}
