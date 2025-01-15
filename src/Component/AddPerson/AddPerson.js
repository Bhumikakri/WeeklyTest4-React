import React from "react";
import "./addPerson.css";
import { useDataContext } from "../DataContext";
import PersonForm from "./PersonForm";

const AddPerson = () => {
  const { state, dispatch, actionTypes } = useDataContext();

  function addData() {
    dispatch({ type: actionTypes.SET_WANT_TO_ADD, payload: true });
  }

  function deleteData(deletedIdx) {
    dispatch({ type: actionTypes.DELETE_DATA, payload: deletedIdx });
  }

  return (
    <div className="AddPerson">
      <div>
        <div className="title">
          <h4>Add New Person</h4>
        </div>
      </div>
      <div>
        <div className="DataBody">
          <table frame="box"  rules="all">
            <tr>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Aadhar Number</th>
              <th>Mobile Number</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
            {state.userData.map((item, idx) => (
              <tr key={idx}>
                <td>{item.Name}</td>
                <td>{item.DOB}</td>
                <td>{item.AadharNumber}</td>
                <td>{item.MobileNumber}</td>
                <td>{item.Age}</td>
                <td>
                  <button onClick={() => deleteData(idx)}>❌</button>
                </td>
              </tr>
            ))}
          </table>
        </div>
        <button className="AddBtn" onClick={addData}>
          Add
        </button>
      </div>
      {state.wantToAdd && <PersonForm />}
    </div>
  );
};

export default AddPerson;
