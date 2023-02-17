import { apiEndPoint } from '../../lib/api';
import TextInput from './TextInput';
import EmailInput from './EmailInput';
import TextAreaInput from './TextAreaInput';
import Button from './Button';

export default function Form() {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault();

        const nameInput = document.getElementById(
            'form_name'
        ) as HTMLInputElement;
        const emailInput = document.getElementById(
            'form_email'
        ) as HTMLInputElement;
        const messageInput = document.getElementById(
            'form_message'
        ) as HTMLInputElement;

        let error;

        if (!messageInput || messageInput.value == '') {
            error = 'Message is required';
        }

        if (!emailInput || emailInput.value == '') {
            error = 'Email address is required';
        }

        if (error) {
            alert(error);
        } else {
            // Get data from the form.
            const data = {
                name: nameInput ? nameInput.value : false,
                email: emailInput ? emailInput.value : false,
                message: messageInput ? messageInput.value : false
            };

            // Send the data to the server in JSON format.
            const JSONdata = JSON.stringify(data);

            const endpoint = apiEndPoint + 'form/contact';

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSONdata
            };

            // Send the form data to our forms API on Vercel and get a response.
            const response = await fetch(endpoint, options);

            // Get the response data from server as JSON.
            // If server returns the name submitted, that means the form works.
            const result = await response.json();

            if (result === true) {
                alert('Form successfully submitted');

                if (nameInput) {
                    nameInput.value = '';
                }

                if (emailInput) {
                    emailInput.value = '';
                }

                if (messageInput) {
                    messageInput.value = '';
                }
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextInput labelText="Name" name="name" />
            <EmailInput labelText="Email" name="email" />
            <TextAreaInput labelText="Message" name="message" />
            <Button>Submit</Button>
        </form>
    );
}
