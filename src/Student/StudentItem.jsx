import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";
import { Link } from "react-router-dom";

const StudentItem = ({ student, index }) => {
    const { removeStudent } = useContext(Context)

    const getAverageMark = () => {
        const totalMarks = student.subjects.reduce((acc, subject) => acc + Number(subject.mark), 0);
        if (!totalMarks) return;
        const averageMark = totalMarks / student.subjects.length;
        const roundAverageMark = Math.round(averageMark);
        return roundAverageMark;
    }

    const averageMark = getAverageMark();
    
    return (
        <li className="student-item">
            <span>
                <strong id="student-index">{`${index + 1}.`}</strong>
                <Link className="links" to={`students/${student.id}`}>
                    {student.fullname}
                </Link> 
            </span>
            <p id="average-mark">{averageMark}</p>  
            <button id="delete-student-btn" onClick={() => removeStudent(student.id)}>Delete</button>
        </li>
    )
}

StudentItem.propTypes = {
    student: PropTypes.object.isRequired,
    index: PropTypes.number,
}

export default StudentItem