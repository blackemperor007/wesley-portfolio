import React from 'react'

const Services = () => {
    return (
        <div className='w-full z-20 h-full flex justify-center items-center'>
            <div className='w-11/12 gap-4 h-full pt-28 md:py-auto py-10 flex flex-col justify-center items-center'>
                <div className="w-full gap-5 flex md:flex-row flex-col justify-center items-center">
                    <div className="md:w-1/2 w-full">
                        <div className='rounded-xl p-6 overflow-hidden primary-glass glass border border-gray-600/[0.5]'>
                            <div className='flex gap-3 items-center z-30 relative'>
                                <div className="w-14 h-14">
                                    <img src="./img/serv01.png" alt="service" className='w-full h-full' />
                                </div>
                                <div>
                                    <h2 className='text-2xl font-bold'>
                                        Web Development
                                    </h2>
                                </div>
                            </div>
                            <div className="w-full py-2 z-30 relative">
                                <p className='text-sm text-gray-400'>
                                    Iprovide full-stack web development services to create
                                    functional and visually appealing websites tallored to your
                                    <br />business needs. Whether it's a personel blog or a complex
                                    business platform, I build websites that are fast, secure, and
                                    <br />optimized for peak performance.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <div className='rounded-xl p-6 glass2 border border-gray-600/[0.5]'>
                            <div className='flex gap-3 items-center'>
                                <div className="w-14 h-14">
                                    <img src="./img/serv02.png" alt="service" className='w-full h-full' />
                                </div>
                                <div>
                                    <h2 className='text-2xl font-bold'>
                                        Graphic Designing
                                    </h2>
                                </div>
                            </div>
                            <div className="w-full py-2">
                                <p className='text-sm text-gray-400'>
                                    Transform your brand's message with eye-catching graphics.
                                    <br />From logo design to marketing materials and web graphics.
                                    I craft visuals that resonnate with your target audience and
                                    <br />convey your brand's identity with creativity and precision.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full gap-5 flex md:flex-row flex-col justify-center items-center'>
                    <div className="md:w-1/2 w-full">
                        <div className='rounded-xl p-6 glass2 min-h-56 border border-gray-600/[0.5]'>
                            <div className='flex gap-3 items-center'>
                                <div className="w-14 h-14">
                                    <img src="./img/serv03.png" alt="service" className='w-full h-full' />
                                </div>
                                <div>
                                    <h2 className='text-2xl font-bold'>
                                        SEO Services
                                    </h2>
                                </div>
                            </div>
                            <div className="w-full py-2">
                                <p className='text-sm text-gray-400'>
                                Elevate your website's presence with exoert SEO strategies designed
                                    to improve search ranking, drive traffic, and increase user engagement.
                                    I provide comprehensive SEO services that help your website reach
                                    its full potential and attract your ideal audience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <div className='rounded-xl p-6 glass min-h-6 border border-gray-600/[0.5]'>
                            <div className='flex gap-3 items-center'>
                                <div className="w-14 h-14">
                                    <img src="./img/serv04.png" alt="service" className='w-full h-full' />
                                </div>
                                <div>
                                    <h2 className='text-2xl font-bold'>
                                        UI/UX Design
                                    </h2>
                                </div>
                            </div>
                            <div className="w-full py-2">
                                <p className='text-sm text-gray-400'>
                                    I create user-centric interfaces that combine aesthetics and usability,
                                    ensuring your website is accessible to all users, regardless of their abilities.
                                    I ensure your website is optimized for search engines and provides a seamless
                                    user experience that keeps visitors coming back for more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services