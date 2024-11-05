import React from "react";
import contactme from "../assets/contact-me.svg";

import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaTelegramPlane,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 border-b-2 border-blue-500 pb-2">
        Let's Connect
      </h2>

      <div className="flex flex-wrap md:flex-nowrap justify-center items-start w-full max-w-5xl">
        {/* Illustration */}
        <div className="flex items-center justify-center mb-6 md:mb-0 md:mr-10 w-full md:w-1/2">
          <img
            // src="https://via.placeholder.com/400"
            src={contactme}
            alt="Illustration"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Form */}
        <form className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg" name = "Contact Us" netlify>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="flex items-center text-gray-700 text-sm mb-1"
            >
              <FaUser className="mr-2" /> Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="flex items-center text-gray-700 text-sm mb-1"
            >
              <FaEnvelope className="mr-2" /> Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="flex items-center text-gray-700 text-sm mb-1"
            >
              <FaCommentDots className="mr-2" /> Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            <FaTelegramPlane className="mr-2" /> Send Message
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-500">
        <p className="text-sm">Aditya Anand © 2024</p>
        <div className="flex justify-center mt-4 space-x-4">
          {/* Social Media Icons */}
          <a
            href="https://www.linkedin.com/in/aditya-anand-20d02/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:adityaanand20122002@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/aadianand"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaGithub />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ContactForm;
