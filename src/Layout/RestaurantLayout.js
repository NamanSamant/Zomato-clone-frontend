import react from "react";

import { BsInfoCircle, BsBookmarkHeart } from "react-icons/bs";
import { GoHorizontalRule } from "react-icons/go";
import { LiaDirectionsSolid } from "react-icons/lia";
import { PiShareFatLight } from "react-icons/pi";
import SecSelector from "../components/Restaurant/DifferentSections/SectionSelector";

const ResLayout = () => {
    return (
        <>
            <div className="container">
                <div className="ml-52 flex flex-row gap-2 hidden md:flex">
                    <div className="w-[40rem] h-[24rem] overflow-hidden">
                        <img
                            src="https://b.zmtcdn.com/data/pictures/chains/4/824/272e79e036b8e62597362b1e64b61a0d.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                            alt="food image"
                            className="w-full h-full brightness-90 hover:scale-105 transition duration-300 hover:brightness-100"
                        />
                    </div>
                    <div className="flex flex-col gap-1 h-[24rem] w-[12rem]">
                        <div className="w-full h-[12rem] overflow-hidden">
                            <img
                                src="https://b.zmtcdn.com/data/pictures/chains/4/824/4f357dd5bee7f4949c92e5be8ee9a434.jpg?fit=around|300:273&crop=300:273;*,*"
                                alt="food image"
                                className="w-full h-full brightness-90 hover:scale-105 transition duration-300 hover:brightness-100"
                            />
                        </div>
                        <div className="w-full h-[12rem] overflow-hidden">
                            <img
                                src="https://b.zmtcdn.com/data/pictures/chains/4/824/9e2d57236223738192508ef09e9b9f5e.jpg?fit=around|300:273&crop=300:273;*,*"
                                alt="food image"
                                className="w-full h-full brightness-90 hover:scale-105 transition duration-300 hover:brightness-100"
                            />
                        </div>
                    </div>
                    <a href="/Zomato-clone-frontend/resid/photos">
                        <div className="w-[14rem] h-[24rem]">
                            <img
                                src="https://b.zmtcdn.com/data/pictures/chains/4/824/a0b0737089095caea69c289948d98951.jpg?fit=around|300:273&crop=300:273;*,*"
                                alt="more images"
                                className="w-full h-full object-cover brightness-50"
                            />
                            <div className="absolute lg:end-[20rem] top-[12rem] md:end-[5rem]">
                                <h2 className="text-white text-xl opacity-90">View Gallery</h2>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="sticky top-0 z-10 bg-gray-50">
                <h1 className="lg:ml-52 text-md md:text-4xl font-medium md:mt-4 ml-2 md:ml-0">Chimney Sizzlers</h1>
                <div className="lg:ml-52 flex flex-col gap-1 md:mt-2 ml-2 md:ml-0">
                    <h2 className="text-sm md:text-lg text-gray-500">Chinese, Tibetan, Seafood, Momos</h2>
                    <h2 className="text-lg text-gray-400 hover:text-gray-500 hover:cursor-pointer hidden md:flex">Yashwant Place Commercial Complex, Chanakyapuri, New Delhi</h2>
                    <div className="flex flex-row gap-2 hidden md:flex">
                        <span className="text-lg text-gray-400">Open now</span>
                        <GoHorizontalRule className="w-2 text-gray-800 mt-2 " />
                        <span className="text-lg text-gray-400">11am – 12midnight (Today)</span>
                        <BsInfoCircle className="mt-2 w-4 h-4 text-gray-400" />
                    </div>
                </div>
                <div className="lg:ml-52 mt-4 sm:ml-2 flex flex-row gap-4 hidden md:flex">
                    <button className="rounded-lg w-28 h-10 border border-gray-500 text-gray-500 hover:bg-gray-200">
                        <div className="flex flex-row items-center ml-1 gap-1">
                            <LiaDirectionsSolid className="text-zomato-400 w-5 h-5" />
                            Direction
                        </div>
                    </button>
                    <button className="rounded-lg w-32 h-10 border border-gray-500 text-gray-500 hover:bg-gray-200">
                        <div className="flex flex-row items-center ml-3 gap-1">
                            <BsBookmarkHeart className="text-zomato-400 w-4 h-4" />
                            Bookmark
                        </div>
                    </button>
                    <button className="rounded-lg w-24 h-10 border border-gray-500 text-gray-500 hover:bg-gray-200">
                        <div className="flex flex-row items-center ml-2 gap-1">
                            <PiShareFatLight className="text-zomato-400 w-5 h-5" />
                            Share
                        </div>
                    </button>
                </div>
                <SecSelector />
            </div>
        </>
    );
};

export default ResLayout;