import React from "react";

const HomeRestaurantCard = (props) => {
    return(
        <>
            <div className="rounded-xl bg-gray-50 hover:bg-white hover:shadow-md hover:scale-110 transition duration-300 w-full h-full mx-auto my-8">
                <div className="flex flex-col gap-3">
                <img
                src={props.src}
                alt="Descriptive Image"
                className="p-2 w-full h-full rounded-2xl"
                />
                <h2 className="px-2">{props.title}</h2>
                <p className="px-2">{props.subtitle}</p>
                </div>
            </div>
        </>
    );
};

export default HomeRestaurantCard;