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

        // Get data from the form.
        const data = {
            name: nameInput ? nameInput.value : false,
            email: emailInput ? emailInput.value : false,
            message: messageInput ? messageInput.value : false
        };

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data);

        // API endpoint where we send form data.
        const endpoint = apiEndPoint + 'form/contact';

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json'
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata
        };

        // Send the form data to our forms API on Vercel and get a response.
        // const response = await fetch(endpoint, options);

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        // const result = await response.json();
        // alert(`Is this your full name: ${result.data}`);
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
