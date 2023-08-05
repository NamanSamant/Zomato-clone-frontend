import React from "react";

import DeliveryCarousal from "./DeliveryCarousal";
import FoodTab from "../FoodTab/foodtab";

const Delivery = () =>  {
    return (
        <>
            <FoodTab/>
            <DeliveryCarousal/>
            <h1 className="text-xl font-semibold mt-12 text-center">Best Food Near You</h1>
        </>
    )
};

export default Delivery;