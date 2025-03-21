"use client"

import { Link as ScrollLink } from "react-scroll"

const Links = [
    {
        name: "Home",
    },
    {
        name: "about",
    },
    {
        name: "journey",
    },
    {
        name: "work",
    },
    {
        name: "Contact",
    },
]
const Nav = ({ containerStyles, listStyles, linkStyles }) => {
    return (
        <nav className={containerStyles}>
            <ul className={listStyles}>
                {Links.map((link, index) => {
                    return (
                        <ScrollLink
                            spy={spy}
                            key={index}
                            to={link.name}
                            smooth
                            className={linkStyles}
                        >
                            {link.name}
                        </ScrollLink>
                    )

                })}

            </ul>
        </nav>
    )
}

export default Nav