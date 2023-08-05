import React from "react";

import { BiSearch } from "react-icons/bi";
import FoodCard from "./FoodCard.component";

const OrderOnline = () => {
    return (
        <>
            <div className="flex flex-row">
                <div className="w-[16rem] h-fit ml-[12rem] sticky top-72">
                    <div className="h-10 w-60 border-r-[3px] rounded border-zomato-400" 
                    style={{backgroundImage: "linear-gradient(90deg, rgba(249,250,251,1) 0%, rgba(255,230,230,0) 4%, rgba(255,218,218,1) 100%)"}}
                    > 
                        <h2 className="text-base ml-6 pt-2 text-zomato-500">Momos & Wontons (10)</h2>
                    </div>
                    <div className="h-10 w-60">
                        <h2 className="text-base ml-6 pt-2 text-gray-500">Soups (21)</h2>
                    </div>
                    <div className="h-10 w-60">
                        <h2 className="text-base ml-6 pt-2 text-gray-500">Starters (28)</h2>
                    </div>
                    <div className="h-10 w-60">
                        <h2 className="text-base ml-6 pt-2 text-gray-500">Rolls and Fuyong (8)</h2>
                    </div>
                    <div className="h-10 w-60">
                        <h2 className="text-base ml-6 pt-2 text-gray-500">Main Course (45)</h2>
                    </div>
                    <div className="h-10 w-60">
                        <h2 className="text-base ml-6 pt-2 text-gray-500">Sizzlers (7)</h2>
                    </div>
                    <div className="h-10 w-60">
                        <h2 className="text-base ml-6 pt-2 text-gray-500">Rice & Noodles (33)</h2>
                    </div>
                    <div className="h-10 w-60">
                        <h2 className="text-base ml-6 pt-2 text-gray-500">Drinks (Beverages) (2)</h2>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex ">
                        <h1 className="text-2xl font-semibold">Order Online</h1>
                        <div className=" ml-96 border-2 rounded-lg border-gray-300 w-60 h-10 flex gap-1">
                            <BiSearch className="text-gray-400 w-5 h-5 mt-2 ml-2" />
                            <input type="search" placeholder="Search within menu" className="text-gray-400 bg-gray-50 text-base" />
                        </div>
                    </div>
                    <h1 className="text-2xl ">Momos and Wontons</h1>
                    <FoodCard/>
                    <hr className="w-full h-0.5 mt-4 bg-gray-300 border-0 rounded" />
                </div>
            </div>
        </>
    );
};

export default OrderOnline;