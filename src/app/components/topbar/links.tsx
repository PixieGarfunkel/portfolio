"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SparkleText from "../SparkleText";

import LinkedIn from "../../resources/linkedin.png";
import GitHub from "../../resources/github.png";
import Discord from "../../resources/discord.png";


import { useState, useEffect } from "react";

const Links = () => {
    const [open, setOpen] = useState(false);

    // Close menu when screen size reaches lg (1024px)
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="relative">
            {/* Menu button for mobile or small screens */}
            <button
                className="lg:hidden flex items-center px-3 py-2 rounded text-white border-white focus:outline-none"
                onClick={() => setOpen(!open)}
                aria-label="Toggle social links menu"
            >
                <motion.svg
                    width="28"
                    height="28"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={open ? "open" : "closed"}
                    className="h-6 w-6"
                >
                    <motion.rect
                        x="0"
                        y="1"
                        width="16"
                        height="2"
                        rx="1"
                        fill="currentColor"
                        variants={{
                            closed: { y: 1, opacity: 1 },
                            open: { y: 1, opacity: 0 }
                        }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.rect
                        height="2"
                        rx="1"
                        fill="currentColor"
                        variants={{
                            closed: { x: 0, y: 8, rotate: 0, width: 16 },
                            open: { x: 2, y: 8, rotate: 45, width: 8 }
                        }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.rect
                        height="2"
                        rx="1"
                        fill="currentColor"
                        variants={{
                            closed: { opacity: 0 },
                            open: { x: 6, y: 8, rotate: 135, width: 8, opacity: 1 }
                        }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.rect
                        x="0"
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        fill="currentColor"
                        variants={{
                            closed: { y: 7, opacity: 1 },
                            open: { y: 7, opacity: 0 }
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.svg>
            </button>

            {/* Links list */}
            <ul
                className={`text-white gap-x-15 lg:flex lg:static lg:flex-row lg:gap-x-15 ${open ? 'block absolute bg-[#303030] rounded right-0 py-2 px-4 z-50 object-contain' : 'hidden'} lg:block`}
            >
                <li>
                    <a href="https://github.com/PixieGarfunkel">
                        <SparkleText>
                            <img className={`rounded-full ${open ? "" : "h-8"}`} src={GitHub.src} alt="Github" />
                        </SparkleText>
                    </a>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/joshua-thomas-9461771b8/">
                        <SparkleText>
                            <img className={open ? "" : "h-8"} src={LinkedIn.src} alt="Linkedin" />
                        </SparkleText>
                    </Link>
                </li>
                <li>
                    <Link href="https://discord.com/users/177497512561606656">
                        <SparkleText>
                            <img className={`rounded-full ${open ? "" : "h-8"}`} src={Discord.src} alt="Discord" />
                        </SparkleText>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Links;