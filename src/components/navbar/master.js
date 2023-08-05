import React from "react";
import { useParams } from "react-router-dom";
import Delivery from "../Delivery/delivery";
import RecRest from "../Restaurant/homePcomp";
import FoodTab from "../FoodTab/foodtab";
import Dining from "../Dining/dining";
import Night from "../Dining/night";

const Master = () => {
    const { type } = useParams();

    return (
        <>
            <div className="m-4 lg:hidden">
                <Delivery />
            </div>
            <div className="m-4">
                <RecRest />
            </div>
            {/* <div className="m-4 lg:hidden">
                {type=== "delivery" && <Delivery/>}
            </div>
            <div className = "m-4">
                {type==="delivery" && <RecRest />}
            </div> */}
            <div className="m-4">
                {type==="dining" && <Dining/>}
            </div>
            <div className="m-4">
                {type==="night" && <Night/>}
            </div>
        </>
    );
};

export default Master;