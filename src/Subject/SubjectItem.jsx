import React from "react";

const SubjectItem = ({ subject }) => (
    <li id="subject-item">
        <p id="subject_text">{subject.subject}</p>
        <p id="subject_date">{subject.date}</p>
        <p id="subject_mark">{subject.mark}</p>
    </li>
);

export default SubjectItem