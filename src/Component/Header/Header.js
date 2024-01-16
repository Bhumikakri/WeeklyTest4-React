import React from "react";
import './header.css';
import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <div className="Header">
            <div className="upper">
                <h1>Bhumika 📑Directory App</h1>
            </div>
            <div className="Lower">
                <button><Link to='/'>Add New Person</Link></button>
                <button><Link to='/retrieve'>Retrieve Information</Link></button>
            </div>
        </div>
    );
};

export default Header;