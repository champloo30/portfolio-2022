import "./contact.scss";
import { useState } from "react";

export default function Contact() {

    const [data, setData] = useState({
        name: "",
        company: "",
        email: "",
        message: "",
    });

    const { name, company, email, message } = data;

    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                'https://v1.nocodeapi.com/champloo30/google_sheets/LlqXPzXghTQcNjur?tabId=Portfolio', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify([
                        [name, company, email, message, new Date().toLocaleString()],
                    ]),
                }
            );
                await response.json();
                setData({ 
                    ...data, 
                    name: "", 
                    company: "", 
                    email: "", 
                    message:"" 
                });

        } catch (error) {
            console.log(error)
        }
    }

    function thankYou () {
        alert('Thank you for your message. I will reach out as soon as possible!')
    }

    return (
        <div className="contact"></div>
  );
}