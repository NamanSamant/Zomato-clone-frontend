import React from "react";

import DeliveryFoodCategory from "./DeliveryFoodCategory";

const DeliveryCarousalLarge = () => {

    return (
        <>
            <div className="container">
            <div className="flex flex-wrap ml-56 gap-6 pt-8">
                <DeliveryFoodCategory src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png" title="Burger" />
                <DeliveryFoodCategory src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" title="Pizza" />
                <DeliveryFoodCategory src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png" title="Biryani" />
                <DeliveryFoodCategory src="https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png" title="Thali" />
                <DeliveryFoodCategory src="https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png" title="Chicken" />
                <DeliveryFoodCategory src="https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png" title="Cake" />
            </div>
            </div>  
        </>
    );
};

export default DeliveryCarousalLarge ;