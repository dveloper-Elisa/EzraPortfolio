import React, { useState } from "react";
import emailjs from "emailjs-com";
import { MdHourglassDisabled } from "react-icons/md";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const SERVICE_ID = "service_cahke3i";
  const TEMPLATE_ID = "template_gd3jcxc";
  const USER_ID = "F81gSF-5NS9B8yfvO";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        SERVICE_ID, // Replace with your service ID
        TEMPLATE_ID, // Replace with your template ID
        formData,
        USER_ID // Replace with your user ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen pb-5 bg-zinc-900 w-[100%]"
      id="contact"
    >

        <div className="flex items-center flex-col text-white justify-center w-[80%]">
      <h2 className="w-full text-center py-10 rounded-md font-bold font-mono text-3xl sm:text-3xl md:text-3xl bg-zinc-800 my-5 ">
        Contact us
      </h2>
      <form
        onSubmit={handleSubmit}
        className="p-6 shadow-md w-full max-w-md bg-zinc-800 rounded-lg"
      >
        <h2 className="text-2xl mb-4 text-center underline">Contact Us</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-200">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your names"
            className="mt-1 p-2 border-b-2 bg-transparent text-white focus-within:outline-none rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-200">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email address"
            className="mt-1 p-2 border-b-2 bg-transparent text-white focus-within:outline-none rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-200">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Message here"
            className="mt-1 p-2 border-b-2 bg-transparent text-white focus-within:outline-none rounded w-full"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-zinc-600 hover:bg-zinc-700 text-white p-2 rounded w-full"
        >
          Send
        </button>
      </form>
      </div>
    </div>
  );
};

export default ContactForm;
