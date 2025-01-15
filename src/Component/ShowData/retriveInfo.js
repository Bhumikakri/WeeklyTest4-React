import React, { useRef } from "react";
import "./retrive.css";
import { useDataContext } from "../DataContext";

const ShowInformation = () => {
    const findRef = useRef();
    const { state, dispatch, actionTypes } = useDataContext();
  
    function handleFind(e) {
      e.preventDefault();
      const findinput = findRef.current.value;
      const sessionData = JSON.parse(localStorage.getItem("userData"));
  
      if (sessionData === null) {
        dispatch({ type: actionTypes.SET_RETRIEVE_USER_DATA, payload: [] });
      } else {
        const searchedResult = sessionData.filter(
          (item) => item.AadharNumber === findinput
        );
  
        if (searchedResult.length > 0) {
          dispatch({ type: actionTypes.SET_RETRIEVE_USER_DATA, payload: searchedResult });
        } else {
          dispatch({ type: actionTypes.SET_RETRIEVE_USER_DATA, payload: [] });
        }
      }
    }
  
    return (
      <div className="Information">
        <div>
          <div className="title">
            <h4>Retrieve Information</h4>
          </div>
        </div>
        <div className="ShowData">
          <div className="Search">
            <form className="find-form" onSubmit={(e) => handleFind(e)}>
              <input
                className="searchAadhar"
                type="number"
                ref={findRef}
                min="100000000000"
                max="999999999999"
                required
              />
              <input type="submit" className="findbtn" value="Find" />
            </form>
          </div>
          <div className="result">
            {state.retrieveUserData && state.retrieveUserData.length === 0 ? (
              <h1 style={{ textAlign: "center" }}>
                {state.retrieveUserData === "" ? "No Data Found" : "No Data"}
              </h1>
            ) : (
              state.retrieveUserData.map((item) => (
                <div style={{ border: "1px solid black" , width:"600px"}} key={item.AadharNumber}>
                  <p>Name :{item.Name}</p>
                  <p>DOB :{item.DOB}</p>
                  <p>Aadhar :{item.AadharNumber} </p>
                  <p>Mobile no. :{item.MobileNumber}</p>
                  <p>Age :{item.Age}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default ShowInformation;
  