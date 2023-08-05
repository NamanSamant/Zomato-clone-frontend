import React from "react";

const RestaurantCard = () => {
    return(
        <>
            <div className="rounded-xl bg-gray-50 hover:bg-white hover:shadow-xl hover:scale-110 transition duration-300 w-full h-full my-8">
                <div className="flex flex-col gap-3">
                <img
                src="https://b.zmtcdn.com/data/pictures/4/824/4e7b77bf8c44f015da580c096caa8202_o2_featured_v2.jpg?output-format=webp"
                alt="restaurant image"
                className="p-2 w-full h-full rounded-2xl"
                />
                <h2 className="px-2">Restaurant's Name</h2>
                <p className="px-2">Description</p>
                </div>
            </div>
        </>
    );
};

export default RestaurantCard;