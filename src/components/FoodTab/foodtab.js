import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


import { BsHandbag } from "react-icons/bs";
import { IoBeerOutline } from "react-icons/io5";
import { GiMorgueFeet } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { CiBeerMugFull } from "react-icons/ci";

const FoodTabLarge = () => {

    const [allTypes, setAllTypes] = useState([
        {
            id: "delivery",
            icon: <img src="https://cdn-icons-png.flaticon.com/128/3272/3272642.png" className="w-4/6 h-4/6 ml-3 pt-3" />,
            name: "Delivery",
            isActive: false
        },
        {
            id: "dining",
            icon: <IoFastFoodOutline className="w-4/6 h-4/6 mt-3 ml-3" />,
            name: "Dining Out",
            isActive: false
        },
        {
            id: "night",
            icon: <CiBeerMugFull className="w-4/6 h-4/6 mt-3 ml-3" />,
            name: "Night Life",
            isActive: false
        }
    ])
    const { type } = useParams();

    return (
        <>
            <div className="container mt-4 ">
                <div className="ml-56 flex gap-12 items-center lg:flex hidden">
                {
                    allTypes.map((items) => (
                        <a href={`${items.id}`}>
                            <div className="w-full h-24 flex gap-4 items-center hover:scale-110 transition duration-300">
                                <div className={type === items.id ? "w-20 h-20 border border-zomato-400 bg-white rounded-full" : "w-20 h-20 bg-white border border-gray-800 rounded-full"}>
                                    <div className={type === items.id ? "text-zomato-400" : "text-gray-600"}>
                                        {items.icon}
                                    </div>
                                </div>
                                <div className={type === items.id ? "text-2xl font-bold text-zomato-400" : "text-2xl font-bold text-gray-500"}>
                                    {items.name}
                                </div>
                            </div>
                        </a>
                    ))
                }
                </div>
            </div>
        </>
    );
};

const MobileTab = () => {
    
    const [allTypes, setAllTypes] = useState([
        {
            id: "delivery",
            icon: <BsHandbag/>,
            name: "Delivery",
            isActive: false

        },
        {
            id: "night",
            icon: <IoBeerOutline/>,
            name: "Night Life",
            isActive: false
        },
        {
            id: "dining",
            icon: <GiMorgueFeet/>,
            name: "Dining Out",
            isActive: false
        }
    ])
    const { type } = useParams();

    return (
        <>
            <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify between md: justify-evenly text-gray-500 border">
                {
                    allTypes.map((items) => (
                        <a href={`${items.id}`}>
                            <div className = {
                                type === items.id ? "flex flex-col relative items-center text-xl text-zomato-400"
                                : "flex flex-col items-center text-xl"
                            }>
                                <div className={
                                    type === items.id &&
                                    "absolute -top-3 w-full h-2 border-t-2 border-zomato-400"
                                }
                                />
                                {items.icon}
                                <h5 className="text-sm">{items.name}</h5>
                            </div>
                        </a>
                    ))
                }
            </div>
        </>
    );
};

const FoodTab = () => {
    return (
        <>
            <div>
                <MobileTab/>
                <FoodTabLarge/>
            </div>
        </>
    );
};

export default FoodTab;