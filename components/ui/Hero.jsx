import React from 'react'
import { FaDownload, FaDribbble, FaGithub, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import Counter from './Counter';

const Hero = () => {
    return (
        <div className='w-full z-20 h-full flex md:gap-3 gap-6 justify-center items-center flex-col'>
            <div className="w-11/12 gap-4 h-full md:pt-14 pt-24 sm:flex-row flex-col-reverse flex justify-center items-center">
                <div className="sm:w-7/12 w-full">
                    <div className="text_container">
                        <h5 className="text-gray-400 text-md">Hey there!</h5>
                        <h2 className="md:text-7xl text-4xl font-bold">I'm <span className="text-primarycolor">Pagnol Wesley</span>,<br /> a web Developper</h2>
                        <p className="py-4 text-sm text-gray-400">
                            Welcome to my digital portfolio, where creativity meets code.
                            <br />I specialize in crafting responsive, user-centric websites that bring your vision to life.
                            <br />Whether it's designing sleek user interfaces or developing robust back-end systems,
                            <br />i'm passionate about delivering impactful web solutions.
                        </p>
                        <a href="./cv-pagnol-wesley.pdf" target='_blank' className='w-fit flex'>
                            <button className='my-3 text-primarycolor px-5 py-2 border-2 text-md bg-transparent border border-primarycolor transition-all duration-200 ease-in-out hover:bg-primarycolor hover:bg-white flex gap-3'>
                                <FaDownload /> Download CV
                            </button>
                        </a>
                    </div>
                </div>
                <div className="sm:w-5/12 w-full flex justify-center items-center">
                    <div className="hero_img_container w-full max-w-[420px] bg-secondarycolor p-3 rounded-3xl border border-gray-600/[0.3] shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
                        <img src="./img/hero.png" alt="hero_img" className='w-full h-full rounded-3xl' />
                    </div>
                </div>
            </div>
            <div className='w-11/12 md:gap-5 gap-3 h-fit pb-4 flex md:flex-row flex-col justify-center items-center'>
                <div className="md:w-7/12 w-full flex items-center py-6 justify-around bg-secondarycolor p-3 rounded-3xl border border-gray-600/[0.5] shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
                    <div className="flex w-full items-center justify-center gap-3 px-2 border-r-2 border-gray-400">
                        <div className='font-bold md:text-5xl text-3xl flex justify-center items-center text-primarycolor'>
                            <Counter from={0} to={4}/>+
                        </div>
                        <div>
                            <h4 className='md:text-md text-sm'>
                                Year Of <br />
                                Experience
                            </h4>
                        </div>
                    </div>

                    <div className="flex w-full items-center justify-center gap-3 px-2">
                        <div className='font-bold md:text-5xl text-3xl flex justify-center items-center text-primarycolor'>
                        <Counter from={0} to={100}/>+
                        </div>
                        <div>
                            <h4 className='md:text-md text-sm'>
                                Projects <br />
                                Completed
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="md:w-5/12 w-full flex items-center py-5 justify-around bg-secondarycolor p-3 rounded-3xl border border-gray-600/[0.5] shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
                    <ul className='flex justify-center items-center gap-4'>
                        <li>
                            <a href=""><button className='w-14 h-14 rounded-full flex justify-center items-center glass border border-gray-600/[0.5] transition-all duration-200 ease-in-out hover:bg-primarycolor'><FaWhatsapp className='w-8 h-8' /></button></a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/@pagnol_wesley?is_from_webapp=1&sender_device=pc"><button className='w-14 h-14 rounded-full flex justify-center items-center glass border border-gray-600/[0.5] transition-all duration-200 ease-in-out hover:bg-primarycolor text-3xl'><FaTiktok /></button></a>
                        </li>
                        <li>
                            <a href="https://github.com/blackemperor007"><button className='w-14 h-14 rounded-full flex justify-center items-center glass border border-gray-600/[0.5] transition-all duration-200 ease-in-out hover:bg-primarycolor text-3xl'><FaGithub /></button></a>
                        </li>
                        <li>
                            <a href=""><button className='w-14 h-14 rounded-full flex justify-center items-center glass border border-gray-600/[0.5] transition-all duration-200 ease-in-out hover:bg-primarycolor text-3xl'><FaLinkedin /></button></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hero