import React from "react";
import './addPerson.css';

const AddPerson=()=>{
    return(
        <div className="AddPerson">
            <div>
                <div className="title">
                <h4>Add New Person</h4>
                </div>
            </div>
            <div>
                <button className="AddBtn">Add</button>
            </div>
        </div>
    );
};

export default AddPerson;