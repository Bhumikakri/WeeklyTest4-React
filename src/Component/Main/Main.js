import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import  "../../App.css";

const Main=()=>{
    return(
        <div>
            <Header/>
            <div className="Main">
            <Outlet />
            </div>
        </div>
    );
};

export default Main;