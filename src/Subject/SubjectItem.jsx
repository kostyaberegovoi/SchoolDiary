import React from "react";

function SubjectItem({ subject }) {
    return (
        <li id="subject-item">
            <p id="subject_text">{subject.subject}</p>
            <p id="subject_date">{subject.date}</p>
            <p id="subject_mark">{subject.mark}</p>
        </li>
    )
}

export default SubjectItem