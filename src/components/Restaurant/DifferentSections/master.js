import React from "react";
import { useParams } from "react-router-dom";
import OrderOnline from "./orderonline";
import ResLayout from "../../../Layout/RestaurantLayout";


const Master = () => {
    const { type } = useParams();

    return(
        <>  <ResLayout/>
            <div className="m-4">
                {type=== "order" && <OrderOnline/>}
            </div>
        </>
    );
};

export default Master;