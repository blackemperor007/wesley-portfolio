import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = ({ light = false }) => {
    // determine the logo color based on the light prop
    const colorClass = light ? "text-white" : "text-accent"

    return (
        <Link href={"/"} className='tracking-[4px]'>
            <Image
                src="/assets/hero/logo.png"
                alt="hero"
                width={100}
                height={100}
                quality={100}
                priority
                className="object-contain"
            />
        </Link>
    )
}

export default Logo