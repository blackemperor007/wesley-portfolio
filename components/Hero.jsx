"use client"

import Image from "next/image"
import { Link as ScrollLink } from "react-scroll"
import { TypeAnimation } from "react-type-animation"

// components importation
import RotatingShape from "./RotatingShape"
import Header from "./Header"


const Hero = () => {
    return (
        <section className="h-[800px] relative bg-accent/10 xl:bg-white">
            {/* HEADER  */}
            <Header />
            <div className="container mx-auto h-full">
                <div className="relative z-20 h-full w-full xl:max-w-[768px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10">
                    <h1 className="h1 text-5xl font-bold max-w-[320px] xl:max-w-none">
                        <span className="text-accent">I Build And</span> Design <br /> Powerful
                        <TypeAnimation
                            preRenderFirstString={true}
                            sequence={["Websites.", 2000, "Apps.", 2000, "UX/UI Design.", 2000]}
                            speed={50}
                            repeat={Infinity}
                            wrapper="span"
                            cursor={false}
                            className="ml:2 xl:ml-4"
                        />
                    </h1>
                    <p className="py-6">
                        Delivering powerful, custom websites that blend aesthetics with performance.
                    </p>
                    <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer">
                        <button className="btn btn-accent mb-8 text-white">Contact me</button>
                    </ScrollLink>
                    {/* STATISTIQUES  */}
                    <div>Stats</div>
                </div>

                {/* IMAGE  */}
                <div className="hidden xl:flex w-[55vw] h-[800px] absolute top-0 right-0 bg-accent">
                    <div className="absolute w-[558px] h-[642px] bottom-0 z-40 left-[6.5vw]">
                        <Image
                            src="/assets/hero/dev.png"
                            fill
                            alt="hero"
                            quality={100}
                            priority
                            className="object-contain"
                        />
                    </div>

                    {/* Arrow Shape  */}
                    <div className="hidden xl:flex absolute top-48 left-[4vw]">
                        <Image
                            src="/assets/hero/arrow.svg"
                            alt="arrow"
                            width={160}
                            height={160}
                        />
                    </div>
                    {/* Shape 1 */}
                    <div className="absolute top-[600px] left-[3vw]">
                        <RotatingShape
                            content={
                                <Image
                                    src="/assets/hero/shape-1.svg"
                                    alt="shape"
                                    width={38}
                                    height={38}
                                />
                            }
                            direction={"left"}
                            duration={6}
                        />
                    </div>
                    {/* Shape 2 */}
                    <div className="absolute top-[600px] left-[3vw]">
                        <RotatingShape
                            content={
                                <Image
                                    src="/assets/hero/shape-2.svg"
                                    alt="shape"
                                    width={34}
                                    height={34}
                                />
                            }
                            direction={"rigth"}
                            duration={5}
                        />
                    </div>
                    {/* Shape 3 */}
                    <div className="absolute top-[600px] left-[3vw]">
                        <RotatingShape
                            content={
                                <Image
                                    src="/assets/hero/shape-3.svg"
                                    alt="shape"
                                    width={38}
                                    height={38}
                                />
                            }
                            direction={"left"}
                            duration={6}
                        />
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Hero