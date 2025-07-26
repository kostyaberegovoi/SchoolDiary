import React from "react";
import PropTypes from "prop-types";
import SubjectItem from "./SubjectItem";

const SubjectsList = ({ allSubjects }) => (
    <ul>
        {allSubjects?.map((subject) => {
            return <SubjectItem subject={subject} key={subject.id} />
        })}
    </ul>
);

SubjectsList.propTypes = {
    allSubjects: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default SubjectsList