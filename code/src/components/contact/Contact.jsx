import "./contact.scss";
import { useState } from "react";

export default function Contact({ isDarkModeActive }) {

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
        <div className={isDarkModeActive ? "contact-dark" : "contact"} id="contact">
            <h1>Contact</h1>
            <h3>(Let's chat over a coffee and a bagel!)</h3>
            <div className="form">
                <form className="input-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" onChange={handleChange} required/>
                    <input type="text" name="company" placeholder="Company Name (optional)" onChange={handleChange}/>
                    <input type="text" name="email" placeholder="Email" onChange={handleChange} required/>
                    <textarea name="message" placeholder="Message" onChange={handleChange} required></textarea>
                    <button onClick={thankYou} type="submit">Send</button>
                </form>
            </div>
        </div>
  );
}