import React, { useState } from "react";
import PropTypes from "prop-types";

function AddStudent(props) {
  const onCreate = props.onCreate;
  let [nameValue, setName] = useState('');
  let [surnameValue, setSurname] = useState('');

function submitHandler(event) {
  event.preventDefault();

  if (nameValue.trim() || surnameValue.trim()) {
    const fullname = nameValue + (" ") + surnameValue;
    onCreate(fullname);
  }
  
  setName('');

  setSurname('');
}
    return (
        <form className="name-surname-div"onSubmit={submitHandler}>
          <div className="name-div">
            <h2 id="name-text">Name</h2>
            <input value={nameValue} onChange={event => setName(event.target.value)} id="student-name-input"></input>
          </div>

          <div className="surname-div">
            <h3 id="surname-text">Surname</h3>
            <input value={surnameValue} onChange={event => setSurname(event.target.value)} id="student-surname-input"></input>
          </div>
          <button type="submit" id="add-student-btn">Add student</button>
        </form>
    )
}

AddStudent.propTypes = {
 onCreate: PropTypes.func.isRequired
}
export default AddStudent