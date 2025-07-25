"use client";

import React from "react";
import Link from "next/link";
import SparkleText from "../SparkleText";

import LinkedIn from "../../resources/linkedin.png";
import GitHub from "../../resources/github.png";
import Discord from "../../resources/discord.png";

const TopBar = () => {
  return (
    <>
      <div className="w-full h-10 sticky top-0">
        <div className="container mx-auto px-4 p-4 h-full">
          <div className="flex justify-between item-center h-full">
            <ul className="flex align-center">
              <li>
                <p className="text-white text-3xl font-bold">
                  Joshua Thomas
                </p>
              </li>
              <li>
                <p className="text-[#a0a0a0] font-bold px-2 py-2.5">
                  Electronics & Software Engineer
                </p>
              </li>
            </ul>
            <ul className="flex gap-x-15 text-white">
              <li>
                <a href="https://github.com/PixieGarfunkel">
                  <SparkleText>
                    <img className="rounded-full h-8"
                      src={GitHub.src} alt="Github" />
                  </SparkleText>
                </a>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/joshua-thomas-9461771b8/">
                  <SparkleText>
                    <img className="h-8"
                      src={LinkedIn.src} alt="Linkedin" />
                  </SparkleText>
                </Link>
              </li>
              <li>
                <Link href="https://discord.com/users/177497512561606656">
                  <SparkleText>
                    <img className="rounded-full h-8"
                      src={Discord.src} alt="Discord" />
                  </SparkleText>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
