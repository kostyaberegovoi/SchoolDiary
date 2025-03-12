import React, {useState} from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AddSubject = ({ onCreate }) => {
    let [subjectValue, setSubject] = useState('Subject');
    let [markValue, setMark] = useState('Mark');
    let [dateValue, setDate] = useState('');

    const addAllTexts = (event) => {
        event.preventDefault()

        if (subjectValue.trim() || dateValue.trim() || markValue.trim()) {
            const subjectObj = {
                subject: subjectValue,
                date: dateValue,
                mark:  markValue,
                id: Math.random(),
            };

           onCreate(subjectObj);
        }

        setSubject('Subject');
      
        setDate('');

        setMark('');
    }

    const clearInput = (event) => {
        if (event.target.value === 'Subject')
        setSubject('');
    }

    return(
        <form id="add-subject-form" onSubmit={addAllTexts}>
            <button type="button" id="home-btn"><Link className="links" to="http://localhost:3000">Home</Link></button>
            <input value={subjectValue} onChange={event => setSubject(event.target.value)} onClick={clearInput} id="subject-input" />
            <input type="date" value={dateValue} onChange={event => setDate(event.target.value)} id="date-input" />
            <select value={markValue} onChange={event => setMark(event.target.value)} id="mark-select">
                <option defaultValue disabled hidden>Mark</option>
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
            </select>
            <button type="submit" id="add-subject-btn">Add Subject</button>
        </form>
    )
}

AddSubject.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddSubject
