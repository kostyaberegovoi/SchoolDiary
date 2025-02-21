import React from "react";
import PropTypes from "prop-types";
import StudentItem from "./StudentItem";

const StudentsList = ({ students }) => (
    <ul>
        {students.map((student, index) => (
            <StudentItem student={student} key={student.id} index={index} />
        ))}
    </ul>
);

StudentsList.propTypes = {
    students: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default StudentsList