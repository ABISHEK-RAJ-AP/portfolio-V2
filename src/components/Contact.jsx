import emailjs, { init } from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
	EMAIL_JS_PUBLIC_KEY,
	EMAIL_JS_SERVICE_ID,
	EMAIL_JS_TEMPLATE_ID,
} from '../constants';
import Footer from './Footer';

// Initialize EmailJS
init(EMAIL_JS_PUBLIC_KEY);

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const result = await emailjs.sendForm(
                EMAIL_JS_SERVICE_ID,
                EMAIL_JS_TEMPLATE_ID,
                formRef.current,
                EMAIL_JS_PUBLIC_KEY
            );

            console.log('Email successfully sent:', result);
            toast.success('Message sent successfully!', {
                position: 'bottom-right',
            });

            setLoading(false);
            e.target.reset(); // Clear form fields after submission
        } catch (error) {
            console.error('Email sending failed:', error);
            toast.error('Uh, oh! Something went wrong. Please try again later.', {
                position: 'bottom-right',
            });
            setLoading(false);
        }
    };

    return (
        <div className="relative z-0 bg-black min-h-screen flex flex-col justify-between">
            <div className="text-white contact-content overflow-hidden pt-12" id="contact">
                <div className="z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl">
                    <p className="font-light">REACH OUT TO ME</p>
                    <h2 className="text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500">
                        Contact.
                    </h2>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
                        <label className="flex flex-col">
                            <span className="font-medium mb-4">Your Name</span>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900 text-white"
                                required
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="font-medium mb-4">Your Email</span>
                            <input
                                type="email"
                                name="email"
                                placeholder="Ex: abc@gmail.com"
                                className="py-4 px-6 rounded-lg font-medium bg-gray-900 text-white"
                                required
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="font-medium mb-4">Your Message</span>
                            <textarea
                                rows={7}
                                name="message"
                                placeholder="Do you have anything to say?"
                                className="py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900 text-white"
                                required
                            />
                        </label>
                        <button
                            type="submit"
                            className={`py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md ${
                                loading ? 'bg-gray-700 cursor-not-allowed' : 'bg-gray-900'
                            } transition duration-300`}
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send'}
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default Contact;
