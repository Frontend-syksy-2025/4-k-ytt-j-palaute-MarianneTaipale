import { useState } from "react";

export function UserFeedBack() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [sentFeedback, setSentFeedback] = useState<{name: string; message: string} | null>(null)

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setSentFeedback({ name, message });

        setName("");
        setMessage("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <input placeholder="Name"
                    value={name}
                    onChange={handleNameChange} />
                <br />

                <textarea placeholder="Your feedback"
                    value={message}
                    onChange={handleMessageChange}>
                </textarea>

                <br />
                <button type="submit">Send</button>

            </form>

            <h3>Name: </h3>
            {sentFeedback?.name}

            <h3>Your feedback: </h3>
            {sentFeedback?.message}
        </>
    )
}