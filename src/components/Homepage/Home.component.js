import React from "react";
import HomeRestaurantCard from "./Home.card.component";

const HomeComponent = () => {
    return (
        <>
            <div className="flex flex-wrap lg:ml-56 lg:p-0 sm:p-2 gap-12">
                <div className="lg:w-1/4 w-full">
                    <a href="/Zomato-clone-frontend/delivery">
                        <HomeRestaurantCard
                            src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                            title="Order Online"
                            subtitle="Stay home and order to your doorstep"
                        />
                    </a>
                </div>
                <div className="lg:w-1/4 w-full">
                    <a href="/Zomato-clone-frontend/dining">
                        <HomeRestaurantCard
                            src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                            title="Dining"
                            subtitle="View the city's favourite dinning venues"
                        />
                    </a>
                </div>
                <div className="lg:w-1/4 w-full">
                    <a href="/Zomato-clone-frontend/night">
                        <HomeRestaurantCard
                            src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                            title="Nightlife and Clubs"
                            subtitle="Explore the city's top nightlife outlets"
                        />
                    </a>
                </div>
            </div>
        </>
    );
};

export default HomeComponent;