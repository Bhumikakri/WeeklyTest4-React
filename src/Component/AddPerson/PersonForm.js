import "./addPerson.css";
import React, { useReducer } from "react";
import { useDataContext } from "../DataContext";

const initialState = {
  username: "",
  dob: "",
  aadhar: "",
  phoneNum: "",
  age: "",
};

const actionTypes = {
  UPDATE_USERNAME: "UPDATE_USERNAME",
  UPDATE_DOB: "UPDATE_DOB",
  UPDATE_AADHAR: "UPDATE_AADHAR",
  UPDATE_PHONE_NUM: "UPDATE_PHONE_NUM",
  UPDATE_AGE: "UPDATE_AGE",
};

const reducer = (state, action) => {
  switch (action.type) {
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

const PersonForm = () => {
  const { dispatch, actionTypes } = useDataContext();
  const [state, localDispatch] = useReducer(reducer, initialState);

  function saveData() {

    if (!state.username || !state.dob || !state.aadhar || !state.phoneNum || !state.age) {
      alert("Please fill in all the fields before saving.");
      return;
    }

    if (state.aadhar.length !== 12 || !/^\d{12}$/.test(state.aadhar)) {
      alert("Aadhar number must be exactly 12 digits.");
      return;
    }

    dispatch({ type: actionTypes.SET_WANT_TO_ADD, payload: false });

    const newUser = {
      Name: state.username,
      DOB: state.dob,
      AadharNumber: state.aadhar,
      MobileNumber: state.phoneNum,
      Age: state.age,
    };

    dispatch({ type: actionTypes.ADD_DATA, payload: newUser });
  }

  return (
    <div className="PersonForm">
      <h3>Fill below form for New Entry</h3>
      <div className="FormInputs">
        <input
          onChange={(e) =>
            localDispatch({
              type: actionTypes.UPDATE_USERNAME,
              payload: e.target.value,
            })
          }
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(e) =>
            localDispatch({
              type: actionTypes.UPDATE_DOB,
              payload: e.target.value,
            })
          }
          type="date"
        />
        <input
          onChange={(e) =>
            localDispatch({
              type: actionTypes.UPDATE_AADHAR,
              payload: e.target.value,
            })
          }
          type="number"
          placeholder="Aadhar number"
          min="100000000000"
          max="999999999999"
        />
        <input
          onChange={(e) =>
            localDispatch({
              type: actionTypes.UPDATE_PHONE_NUM,
              payload: e.target.value,
            })
          }
          type="number"
          placeholder="Mobile number"
          min="1000000000"
          max="9999999999"
        />
        <input
          onChange={(e) =>
            localDispatch({
              type: actionTypes.UPDATE_AGE,
              payload: e.target.value,
            })
          }
          type="text"
          placeholder="Age"
        />
        <button onClick={saveData}> ✔ </button>
      </div>
    </div>
  );
};

export default PersonForm;
