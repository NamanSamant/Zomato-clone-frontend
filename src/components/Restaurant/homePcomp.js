import React from "react";
import RestaurantCard from "./RestaurantCard.component";
import DeliveryCarousalLarge from "../Delivery/DeliveryCarousalLarge";
import SecSelector from "./DifferentSections/SectionSelector";
import FoodTab from "../FoodTab/foodtab";

const RecRest = () => {
    return (
        <>
            <FoodTab/>
            <div className="w-full h-80 bg-gray-100 mt-4 hidden lg:block ">
                <div className="container pt-8 lg:block hidden">
                    <span className="text-2xl font-semibold text-gray-600 ml-56">Inspiration for your first order</span>
                    <DeliveryCarousalLarge />
                </div>
            </div>
            <div className="flex flex-wrap lg:ml-60 lg:p-0 sm:p-2 gap-12">
                <div className="lg:w-1/4 w-full">
                    <a href="/resid/order">
                        <RestaurantCard />
                    </a>
                </div>
                <div className="lg:w-1/4 w-full">
                    <RestaurantCard />
                </div>
                <div className="lg:w-1/4 w-full">
                    <RestaurantCard />
                </div>
                <div className="lg:w-1/4 w-full">
                    <RestaurantCard />
                </div>
                <div className="lg:w-1/4 w-full">
                    <RestaurantCard />
                </div>
                <div className="lg:w-1/4 w-full">
                    <RestaurantCard />
                </div>
                <div className="lg:w-1/4 w-full">
                    <RestaurantCard />
                </div>
                <div className="lg:w-1/4 w-full">
                    <RestaurantCard />
                </div>
                <div className="lg:w-1/4 w-full">
                    <RestaurantCard />
                </div>
                <div className="lg:w-1/4 w-full">
                    <RestaurantCard />
                </div>
                <div className="lg:w-1/4 w-full">
                    <RestaurantCard />
                </div>
                <div className="lg:w-1/4 w-full">
                    <RestaurantCard />
                </div>
            </div>
        </>
    )
};

export default RecRest;