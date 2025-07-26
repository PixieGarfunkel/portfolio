"use client";

import React from "react";
import Image from "next/image";

import SparkleText from "../SparkleText";
import Face from '../../resources/Face.jpg';

const LinedRef = (params: {href: string; text: string}) => {
    return (
        <SparkleText>
            <a href={params.href} className="underline decoration-cyan-600">{params.text}</a>
        </SparkleText>
    );
}

const Information = () => {
    return (
    <>
        <div className="container mx-auto px-4 p-20 h-full">
            <div className="flex justify-start item-center h-full gap-x-20">
                <img
                    className="flex rounded-full hidden md:block h-75"
                    src={Face.src} alt="JT Picture" />
                <div className="container mx-auto px-4 h-full">
                    <h1 className="text-white font-bold text-2xl">
                        About Me
                    </h1>
                    <p className="text-[#a0a0a0]">
                        I&apos;m Joshua Thomas, an electronics and software engineer from<br/>
                        England. I&apos;m currently working as an apprentice electronics <br/>
                        engineer at <LinedRef href="https://www.sstl.co.uk" text="SSTL" />.<br/>
                        <br/>
                        In my spare time, I program things like this as well, play the<br/>
                        guitar and the typical gaming. For some reason, I also volunteer<br/>
                        as a special constable, which takes about 16 hours every fortnite<br/>
                        to do.<br/>
                        <br/>
                        Check out my links on the top right to have a look at what I do<br/>
                        and feel free to add me on <LinedRef href="https://discord.com/users/177497512561606656" text="Discord" />.<br/>
                    </p>
                </div>
            </div>
        </div>
    </>
    )
}

export default Information