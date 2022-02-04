import "./contact.scss";
import { useState } from "react";

export default function Contact() {

    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState(false)

    const handleInput = e => {
        const copyFormData = { ...formData };
        copyFormData[e.target.name] = e.target.value;
        setFormData(copyFormData);
    };

    const sendData = async e => {
        e.preventDefault();
        const {name, company, email, message} = formData
        try {
            const response = await fetch(
                "https://v1.nocodeapi.com/champloo30/google_sheets/LlqXPzXghTQcNjur?tabId=Portfolio",
                {
                    method: "post",
                    body: JSON.stringify([[name, company, email, message]]),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            const json = await response.json();
            console.log("Success:", JSON.stringify(json));
            setMessage("Success");
        } catch (error) {
            console.error("Error:", error);
            setMessage("Error");
        }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setMessage(true);
      e.target.reset();
    }

    return (
        <div className="contact" id="contact">
            <h1>Contact</h1>
            <h3>(Let's chat over a coffee and a bagel!)</h3>
            <div className="form">
                <form className="input-form" onSubmit={handleSubmit, sendData}>
                    <input type="text" name="name" placeholder="Name" onChange={handleInput} required/>
                    <input type="text" name="company" placeholder="Company Name (optional)" onChange={handleInput}/>
                    <input type="text" name="email" placeholder="Email" onChange={handleInput} required/>
                    <textarea name="message" placeholder="Message" onChange={handleInput} required></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll get back with you very soon! :)</span>}
                </form>
            </div>
        </div>
  );
}