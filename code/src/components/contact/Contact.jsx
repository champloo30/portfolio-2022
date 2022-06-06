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
        <div id="contact" className="contact">
            <div className="contact-container">
                <div className="c-title">
                    <h3>Get In Touch</h3>
                    <div className="c-title-box">
                        <div className="h-line"></div>
                        <h2>let's chat</h2>
                        <div className="h-line"></div>
                    </div>
                </div>
                <div className="contact-form-container">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="row">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" name="name" id="name" placeholder="Full Name" value={name} onChange={handleChange} required />
                        </div>
                        <div className="row">
                            <label htmlFor="company">Company</label>
                            <input type="text" name="company" id="company" placeholder="Company Name" value={company} onChange={handleChange} />
                        </div>
                        <div className="row">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" placeholder="Email" value={email} onChange={handleChange} required />
                        </div>
                        <div className="row">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message"  value={message} onChange={handleChange} placeholder="What can I do for you?" cols="30" rows="10" required ></textarea>
                        </div>
                        <input className="sub-btn" type="submit" value="Send Message" onClick={thankYou} />
                    </form>
                </div>
            </div>
        </div>
  );
}