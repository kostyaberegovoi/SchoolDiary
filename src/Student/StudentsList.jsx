import React from "react";
import PropTypes from "prop-types";
import StudentItem from "./StudentItem";

function StudentsList({ students }) {
    return (
        <ul>
            {students.map((student, index) => {
                return <StudentItem student={student} key={student.id} index={index}></StudentItem>
            })}
        </ul>
    )
}

StudentsList.propTypes = {
    students: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default StudentsList