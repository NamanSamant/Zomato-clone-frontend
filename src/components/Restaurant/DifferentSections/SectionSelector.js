import React, { useState } from "react";
import { useParams } from "react-router-dom";

const SecSelector = () => {

    const [allTypes, setAllTypes] = useState([
        {
            id: "overview",
            name: "Overview",
            isActive: false
        },
        {
            id: "order",
            name: "Order Online",
            isActive: false
        },
        {
            id: "reviews",
            name: "Reviews",
            isActive: false
        },
        {
            id: "photos",
            name: "Photos",
            isActive: false
        },
        {
            id: "menu",
            name: "Menu",
            isActive: false
        },
        {
            id: "book",
            name: "Book a Table",
            isActive: false
        },
    ])

    const { type } = useParams();

    return (
        <>
            <div className="hidden md:flex flex-row gap-16 ml-56 mt-6">
                { 
                    allTypes.map((items) => (
                    <a href={`${items.id}`}>
                        <h2 className={type===items.id ? "text-xl text-zomato-400 " : "text-xl text-gray-500 hover:text-zomato-400 hover:cursor-pointer"}>
                            {items.name}
                        </h2>
                    </a>
                ))
                }
            </div>
            <hr className="w-[68rem] h-0.5 ml-52 mt-4 bg-gray-300 border-0 rounded" />
        </>
    );
};

export default SecSelector;