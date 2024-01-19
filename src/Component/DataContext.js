// DataContext.js
import React, { createContext, useReducer, useContext } from "react";

export const DataContext = createContext();

const initialState = {
  wantToAdd: false,
  userData: JSON.parse(localStorage.getItem("userData")) || [],
  username: "",
  dob: "",
  aadhar: "",
  phoneNum: "",
  age: "",
};

const actionTypes = {
  SET_WANT_TO_ADD: "SET_WANT_TO_ADD",
  ADD_DATA: "ADD_DATA",
  DELETE_DATA: "DELETE_DATA",
  UPDATE_USERNAME: "UPDATE_USERNAME",
  UPDATE_DOB: "UPDATE_DOB",
  UPDATE_AADHAR: "UPDATE_AADHAR",
  UPDATE_PHONE_NUM: "UPDATE_PHONE_NUM",
  UPDATE_AGE: "UPDATE_AGE",
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_WANT_TO_ADD:
      return { ...state, wantToAdd: action.payload };
    case actionTypes.ADD_DATA:
      const updatedUserData = [...state.userData, action.payload];
      localStorage.setItem("userData", JSON.stringify(updatedUserData));
      return { ...state, userData: updatedUserData };
    case actionTypes.DELETE_DATA:
      const filteredData = state.userData.filter((_, idx) => idx !== action.payload);
      localStorage.setItem("userData", JSON.stringify(filteredData));
      return { ...state, userData: filteredData };
    case actionTypes.UPDATE_USERNAME:
      return { ...state, username: action.payload };
    case actionTypes.UPDATE_DOB:
      return { ...state, dob: action.payload };
    case actionTypes.UPDATE_AADHAR:
      return { ...state, aadhar: action.payload };
    case actionTypes.UPDATE_PHONE_NUM:
      return { ...state, phoneNum: action.payload };
    case actionTypes.UPDATE_AGE:
      return { ...state, age: action.payload };
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch, actionTypes }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
