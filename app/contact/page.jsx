import ContactForm from "@/components/ui/ContactForm";
import React from "react";
import { FaAddressBook, FaEnvelope, FaFacebookF, FaGithub, FaLinkedinIn, FaLocationPin, FaMap, FaMapLocation, FaPhone, FaTiktok, FaWhatsapp } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className="w-full z-20 h-full flex justify-center items-center">
            <div className="w-11/12 gap-4 h-full pt-20 pb-56 flex flex-col justify-center items-center">
                <div className="w-full">
                    <h3 className="font-bold text-center text-2xl">Contact Me</h3>
                </div>
                <div className="w-full flex items-center justify-center">
                    <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 rounded-xl ">
                            <div className="mt-6 space-y-8 md:mt-8">
                                <p className="flex items-start -mx-2">
                                    <FaEnvelope className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" />
                                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">emperorb007@gmail.com</span>
                                </p>

                                <p className="flex items-start -mx-2">
                                    <FaWhatsapp className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" />
                                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                                        <a href="https://wa.me/237654765592">Start chat</a>
                                    </span>
                                </p>

                                <p className="flex items-start -mx-2">
                                    <FaLocationPin className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" />

                                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                                        Douala, Cameroun
                                    </span>
                                </p>

                                <p className="flex items-start -mx-2">
                                    <FaPhone className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" />
                                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                                        <a href="tel:+237698761410">+(237) 698-761-410</a>
                                    </span>
                                </p>
                            </div>
                            <div className="mt-6 w-80 md:mt-8">
                                <h3 className="text-gray-600 dark:text-gray-300 ">Follow us</h3>

                                <div className="flex mt-4 -mx-1.5 ">
                                    <a href="#" className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500">
                                        <FaFacebookF className="w-7 h-7 fill-current" />
                                    </a>

                                    <a href="#" className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500">
                                        <FaGithub className="w-7 h-7" />
                                    </a>

                                    <a href="#" className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500">
                                        <FaLinkedinIn className="w-7 h-7" />
                                    </a>

                                    <a href="#" className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500">
                                        <FaTiktok className="w-7 h-7" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
