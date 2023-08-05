import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import HomeLayout from "../Layout/Home.layout";

const RestaurantHOC = ({component: Component, ...rest}) => {
    return(
        <>
            <Routes>
            <Route {...rest}
            Component = {(props) => (
                <HomeLayout>
                    <Component {...props} />
                </HomeLayout>
            )}/>
            </Routes>
        </>
    )
};

export default RestaurantHOC;