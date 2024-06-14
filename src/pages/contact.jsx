import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const SERVICE_ID="service_cahke3i"
    const TEMPLATE_ID="template_gd3jcxc"
    const USER_ID="F81gSF-5NS9B8yfvO"

    const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs.send(
            SERVICE_ID,    // Replace with your service ID
            TEMPLATE_ID,   // Replace with your template ID
            formData,
            USER_ID        // Replace with your user ID
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
        }).catch((err) => {
            console.error('FAILED...', err);
            alert('Failed to send message. Please try again later.');
        });
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen" id='contact'>
            <h2 className="font-bold font-mono text-6xl bg-slate-200 w-full text-center py-10 my-20">Reach out to us</h2>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl mb-4">Contact Us</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Name</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 p-2 border rounded w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 p-2 border rounded w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700">Message</label>
                    <textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-1 p-2 border rounded w-full"
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full md:w-auto">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;
