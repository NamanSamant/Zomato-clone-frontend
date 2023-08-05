import React from "react";

const DeliveryFoodCategory = (props) => {
    return (
        <>
                <div className="flex flex-col items-center lg:w-40 lg:h-40 w-1/5 h-1/5 md:w-1/6 md:h-1/6">
                <div className="w-full h-full bg-white rounded-full">
                    <img 
                    src={props.src}
                    alt={props.title}
                    className="w-full h-full rounded-full"
                    />
                </div>
                <div>
                    <h3 className="my-2 text-sm font-medium mx-12">{props.title}</h3>
                </div>
                </div>
        </>
    );
};

export default DeliveryFoodCategory;