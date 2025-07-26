"use client";

import React from "react";
import Links from "./links";
import Name from "./name";

const TopBar = () => {
  return (
    <>
      <div className="w-full h-10 sticky top-0">
        <div className="container mx-auto px-4 p-10 h-full">
          <div className="flex justify-between items-center h-full">
            <Name />
            <Links />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
