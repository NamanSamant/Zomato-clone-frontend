import React, { useState, useEffect } from "react";

import { FaPizzaSlice } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";
import { GoSearch } from "react-icons/go";



const MobileNav = () => {
    return (
        <>
            <div className="items-center justify-between flex w-full sm:hidden ">
                <a href="/">
                    <div className="w-28">
                        <img
                            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                </a>
                <div className="flex items-center gap-3">
                    <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">Use App</button>
                    <span className="border p-2 border-blue-300 text-blue-400 rounded-full">
                        <FaPizzaSlice />
                    </span>
                </div>
            </div>
        </>
    );
};

const TabletNav = () => {
    return (
        <>
            <div className="w-full flex justify-between items-center hidden sm:flex lg:hidden">
                <a href="/">
                    <div className="pl-6 w-40">
                        <img
                            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                </a>
                <div className="flex items-center gap-3 pr-6">
                    <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">Use App</button>
                    <span className="border p-2 border-blue-300 text-blue-400 rounded-full">
                        <FaPizzaSlice />
                    </span>
                </div>
            </div>
        </>
    );
};

const BigNav = () => {
    return (
        <>
            <div className="w-full flex gap-10 items-center hidden lg:flex">
                <a href="/">
                    <div className="ml-52 w-32">
                        <img
                            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                </a>
                <div className="w-1/2 h-12 shadow-lg rounded-lg border-2 border-gray-100 flex gap-1 items-center">
                    <span className="text-red-400">
                        <IoLocationSharp className="ml-2 w-6 h-6" />
                    </span>
                    <h4 className="text-gray-500">Ywca, 1, Ashoka Rd, Hanu</h4>
                    <IoMdArrowDropdown className="w-6 h-6 text-gray-500" />
                    <RxDividerVertical className="w-6 h-6 text-gray-300" />
                    <GoSearch className="w-5 h-5 text-gray-400" />
                    <input type="search" placeholder="Search for restaurant, cuisine or a dish" className="text-gray-500 w-1/2" />
                </div>
                <a href="/xy/login">
                    <button className="text-gray-500 text-lg hover:text-zomato-500" type="button">Log in</button>
                </a>
                <a href="/xy/signup">
                    <button className="text-gray-500 text-lg hover:text-zomato-500" type="button">Sign up</button>
                </a>

            </div>
        </>
    );
};

const Navbar = () => {
    return (
        <>
            <nav className="p-4 flex bg-white shadow-md items-center lg:hidden">
                <MobileNav />
                <TabletNav />
            </nav>
            <nav className="py-4 ">
                <BigNav />
            </nav>
        </>
    );
};

export default Navbar;