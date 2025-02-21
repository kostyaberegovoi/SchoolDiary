import React from "react";
import PropTypes from "prop-types";
import SubjectItem from "./SubjectItem";

function SubjectsList({ allSubjects }) {
    return (
        <ul>
            {allSubjects.map((subject) => {
                return <SubjectItem subject={subject} key={subject.id}></SubjectItem>
            })}
        </ul>
    )
}

SubjectsList.propTypes = {
    allSubjects: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default SubjectsList