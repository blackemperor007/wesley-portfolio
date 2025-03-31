import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve,ms))
}

const TransitionLink = ({ href, children, ...props}) => {
    const router = useRouter();
    const handleTransition = async(e)=>{
        e.preventDefault();
        const body = document.querySelector("body");
        body?.classList.add("page-transition");
        body?.classList.add("overflow-hidden");
        await sleep(200);
        router.push(href);
        await sleep(200);
        body?.classList.remove("page-transition");
        await sleep(200);
        body?.classList.remove("overflow-hidden")
    }
  return (
    <Link href={href} onClick={handleTransition} {...props}> {children} </Link>
  )
}

export default TransitionLink