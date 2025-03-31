"use client"
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react'

const ContactForm = () => {
    const form = useRef();

    const [messagesent, setMessagesent] = useState();
    const [setIsButton, setIsButtonDisable] = useState();

    const serviceid = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateid = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const emailpublickey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(serviceid, templateid, form.current, {
                publicKey: emailpublickey,
            })
            .then(
                () => {
                    setMessagesent(true);
                    setIsButtonDisable(true);
                    form.current.reset();
                    setTimeout(() => {
                        setMessagesent(false);
                        setIsButtonDisable(false);
                    }, 5000);
                },
                (error) => {

                },
            );
    };

    return (
        <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
            <form ref={form} onSubmit={sendEmail}>
                <div className="-mx-2 md:items-center md:flex">
                    <div className="flex-1 px-2">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Your name</label>
                        <input name="name" type="text" placeholder="your name" required className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="flex-1 px-2 mt-4 md:mt-0">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Your Phone Number</label>
                        <input name="phone" type="tel" placeholder="phone number" required className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                </div>

                <div className="w-full mt-4">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Message
                    </label>
                    <textarea name="message" className="h-32 md:h-56 block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message" ></textarea>
                </div>

                <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Send message
                </button>
            </form>

            <div className={`py-2 rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946] ${messagesent ? "visible" : "hidden"}`}>

                <p className='text-center py2'>
                    Message Send
                </p>

            </div>
        </div>

    )
}

export default ContactForm

